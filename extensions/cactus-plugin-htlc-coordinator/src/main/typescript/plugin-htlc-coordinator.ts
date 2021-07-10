import { Server } from "http";
import { Server as SecureServer } from "https";
import { v4 as uuidv4 } from "uuid";
import { Express } from "express";
import { promisify } from "util";
import { Optional } from "typescript-optional";
import {
  ICactusPlugin,
  ICactusPluginOptions,
  IPluginWebService,
  IWebServiceEndpoint,
} from "@hyperledger/cactus-core-api";
import { PluginRegistry } from "@hyperledger/cactus-core";
import { PluginImportType } from "@hyperledger/cactus-core-api";
import {
  Checks,
  Logger,
  LoggerProvider,
  LogLevelDesc,
} from "@hyperledger/cactus-common";
import {
  InitializeRequest as InitializeRequestBesuERC20,
  NewContractRequest as NewContractRequestBesuERC20,
  IPluginHtlcEthBesuErc20Options,
  PluginFactoryHtlcEthBesuErc20,
  WithdrawRequest as WithdrawRequestBesuERC20,
} from "@hyperledger/cactus-plugin-htlc-eth-besu-erc20";
import {
  InitializeRequest as InitializeRequestBesu,
  NewContractObj,
  InvokeContractV1Response,
  IPluginHtlcEthBesuOptions,
  PluginFactoryHtlcEthBesu,
  WithdrawReq,
} from "@hyperledger/cactus-plugin-htlc-eth-besu";
import { PluginLedgerConnectorBesu } from "@hyperledger/cactus-plugin-ledger-connector-besu";
import { OwnHTLCEndpoint } from "./web-services/own-htlc-endpoint";
import { CounterpartyHTLCEndpoint } from "./web-services/counterparty-htlc-endpoint";
import { WithdrawCounterpartyEndpoint } from "./web-services/withdraw-counterparty-endpoint";
import {
  OwnHTLCRequest,
  CounterpartyHTLCRequest,
  WithdrawCounterpartyRequest,
  HtlcPackage,
} from "./generated/openapi/typescript-axios";

export interface IPluginHTLCCoordinatorOptions extends ICactusPluginOptions {
  pluginRegistry: PluginRegistry;
  logLevel?: LogLevelDesc;
}

export class PluginHTLCCoordinator implements ICactusPlugin, IPluginWebService {
  private readonly instanceId: string;
  private readonly log: Logger;
  private readonly pluginRegistry: PluginRegistry;
  private endpoints: IWebServiceEndpoint[] | undefined;
  private httpServer: Server | SecureServer | null = null;

  public static readonly CLASS_NAME = "PluginHTLCCoordinator";

  public get className(): string {
    return PluginHTLCCoordinator.CLASS_NAME;
  }

  constructor(public readonly options: IPluginHTLCCoordinatorOptions) {
    const fnTag = `${this.className}#constructor()`;
    Checks.truthy(options, `${fnTag} arg options`);
    Checks.truthy(options.instanceId, `${fnTag} options.instanceId`);
    Checks.truthy(options.pluginRegistry, `${fnTag} options.pluginRegistry`);

    const level = this.options.logLevel || "INFO";
    const label = this.className;
    this.log = LoggerProvider.getOrCreate({ level, label });

    this.instanceId = options.instanceId;
    this.pluginRegistry = options.pluginRegistry;
  }

  public getInstanceId(): string {
    return this.instanceId;
  }

  public getPackageName(): string {
    return `@hyperledger/cactus-plugin-htlc-coordinator`;
  }

  public getHttpServer(): Optional<Server | SecureServer> {
    return Optional.ofNullable(this.httpServer);
  }

  public async shutdown(): Promise<void> {
    const serverMaybe = this.getHttpServer();
    if (serverMaybe.isPresent()) {
      const server = serverMaybe.get();
      await promisify(server.close.bind(server))();
    }
  }

  async registerWebServices(app: Express): Promise<IWebServiceEndpoint[]> {
    const webServices = await this.getOrCreateWebServices();
    await Promise.all(webServices.map((ws) => ws.registerExpress(app)));
    return webServices;
  }

  public async getOrCreateWebServices(): Promise<IWebServiceEndpoint[]> {
    if (Array.isArray(this.endpoints)) {
      return this.endpoints;
    }
    const endpoints: IWebServiceEndpoint[] = [];
    {
      const endpoint = new OwnHTLCEndpoint({
        coordinator: this,
        logLevel: this.options.logLevel,
      });
      endpoints.push(endpoint);
    }
    {
      const endpoint = new CounterpartyHTLCEndpoint({
        coordinator: this,
        logLevel: this.options.logLevel,
      });
      endpoints.push(endpoint);
    }
    {
      const endpoint = new WithdrawCounterpartyEndpoint({
        coordinator: this,
        logLevel: this.options.logLevel,
      });
      endpoints.push(endpoint);
    }
    return endpoints;
  }

  public async ownHTLC(
    ownHTLCRequest: OwnHTLCRequest,
  ): Promise<InvokeContractV1Response> {
    const fnTag = `${this.className}#ownHTLC()`;
    const connector = this.pluginRegistry.plugins.find(
      (plugin) => plugin.getInstanceId() == ownHTLCRequest.connectorId,
    ) as PluginLedgerConnectorBesu;

    const pluginRegistry = new PluginRegistry({});
    pluginRegistry.add(connector);

    switch (ownHTLCRequest.htlcPackage) {
      case HtlcPackage.BesuErc20: {
        const pluginOptions: IPluginHtlcEthBesuErc20Options = {
          instanceId: uuidv4(),
          pluginRegistry,
        };
        const factoryHTLC = new PluginFactoryHtlcEthBesuErc20({
          pluginImportType: PluginImportType.Local,
        });
        const pluginHtlc = await factoryHTLC.create(pluginOptions);
        const request: InitializeRequestBesuERC20 = {
          connectorId: connector.getInstanceId(),
          keychainId: ownHTLCRequest.keychainId,
          constructorArgs: ownHTLCRequest.constructorArgs,
          web3SigningCredential: ownHTLCRequest.web3SigningCredential,
          gas: ownHTLCRequest.gas,
        };
        const res = await pluginHtlc.initialize(request);
        if (
          res.transactionReceipt?.status == true &&
          res.transactionReceipt?.contractAddress != undefined
        ) {
          const newContractRequest: NewContractRequestBesuERC20 = {
            contractAddress: res.transactionReceipt?.contractAddress,
            inputAmount: ownHTLCRequest.inputAmount,
            outputAmount: ownHTLCRequest.outputAmount,
            expiration: ownHTLCRequest.expiration,
            hashLock: ownHTLCRequest.hashLock,
            tokenAddress: ownHTLCRequest.tokenAddress,
            receiver: ownHTLCRequest.receiver,
            outputNetwork: ownHTLCRequest.outputNetwork,
            outputAddress: ownHTLCRequest.outputAddress,
            connectorId: connector.getInstanceId(),
            keychainId: ownHTLCRequest.keychainId,
            web3SigningCredential: ownHTLCRequest.web3SigningCredential,
            gas: ownHTLCRequest.gas,
          };
          const res2 = await pluginHtlc.newContract(newContractRequest);
          return res2;
        }
      }
      case HtlcPackage.Besu: {
        const pluginOptions: IPluginHtlcEthBesuOptions = {
          instanceId: uuidv4(),
          pluginRegistry,
        };
        const factoryHTLC = new PluginFactoryHtlcEthBesu({
          pluginImportType: PluginImportType.Local,
        });
        const pluginHtlc = await factoryHTLC.create(pluginOptions);
        const request: InitializeRequestBesu = {
          connectorId: connector.getInstanceId(),
          keychainId: ownHTLCRequest.keychainId,
          constructorArgs: ownHTLCRequest.constructorArgs,
          web3SigningCredential: ownHTLCRequest.web3SigningCredential,
          gas: ownHTLCRequest.gas,
        };
        const res = await pluginHtlc.initialize(request);
        if (
          res.transactionReceipt?.status == true &&
          res.transactionReceipt?.contractAddress != undefined
        ) {
          const newContractRequest: NewContractObj = {
            contractAddress: res.transactionReceipt?.contractAddress,
            outputAmount: ownHTLCRequest.outputAmount,
            expiration: ownHTLCRequest.expiration,
            hashLock: ownHTLCRequest.hashLock,
            receiver: ownHTLCRequest.receiver,
            inputAmount: ownHTLCRequest.inputAmount,
            outputNetwork: ownHTLCRequest.outputNetwork,
            outputAddress: ownHTLCRequest.outputAddress,
            connectorId: connector.getInstanceId(),
            keychainId: ownHTLCRequest.keychainId,
            web3SigningCredential: ownHTLCRequest.web3SigningCredential,
            gas: ownHTLCRequest.gas,
          };
          const res2 = await pluginHtlc.newContract(newContractRequest);
          return res2;
        }
      }
      default: {
        throw new Error(
          `${fnTag} Unrecognized HTLC Package: ` +
            `${ownHTLCRequest.htlcPackage} Supported ones are: ` +
            `${Object.values(HtlcPackage).join(";")}`,
        );
      }
    }
  }

  public async counterpartyHTLC(
    counterpartyHTLCRequest: CounterpartyHTLCRequest,
  ): Promise<InvokeContractV1Response> {
    const fnTag = `${this.className}#counterpartyHTLC()`;
    const connector = this.pluginRegistry.plugins.find(
      (plugin) => plugin.getInstanceId() == counterpartyHTLCRequest.connectorId,
    ) as PluginLedgerConnectorBesu;
    const pluginRegistry = new PluginRegistry({});
    pluginRegistry.add(connector);

    switch (counterpartyHTLCRequest.htlcPackage) {
      case HtlcPackage.BesuErc20: {
        const pluginOptions: IPluginHtlcEthBesuErc20Options = {
          instanceId: uuidv4(),
          pluginRegistry,
        };

        const factoryHTLC = new PluginFactoryHtlcEthBesuErc20({
          pluginImportType: PluginImportType.Local,
        });
        const pluginHtlc = await factoryHTLC.create(pluginOptions);

        const res = await pluginHtlc.getSingleStatus(
          counterpartyHTLCRequest.htlcId,
          counterpartyHTLCRequest.connectorId,
          counterpartyHTLCRequest.keychainId,
          counterpartyHTLCRequest.web3SigningCredential,
        );
        return res;
      }
      case HtlcPackage.Besu: {
        const pluginOptions: IPluginHtlcEthBesuOptions = {
          instanceId: uuidv4(),
          pluginRegistry,
        };
        const factoryHTLC = new PluginFactoryHtlcEthBesu({
          pluginImportType: PluginImportType.Local,
        });
        const pluginHtlc = await factoryHTLC.create(pluginOptions);
        const res = await pluginHtlc.getSingleStatus(
          counterpartyHTLCRequest.htlcId,
          counterpartyHTLCRequest.connectorId,
          counterpartyHTLCRequest.keychainId,
          counterpartyHTLCRequest.web3SigningCredential,
        );
        return res;
      }
      default: {
        throw new Error(
          `${fnTag} Unrecognized HTLC Package: ` +
            `${counterpartyHTLCRequest.htlcPackage} Supported ones are: ` +
            `${Object.values(HtlcPackage).join(";")}`,
        );
      }
    }
  }
  public async withdrawCounterparty(
    withdrawCounterpartyRequest: WithdrawCounterpartyRequest,
  ): Promise<InvokeContractV1Response> {
    const fnTag = `${this.className}#withdrawCounterparty()`;
    const connector = this.pluginRegistry.plugins.find(
      (plugin) =>
        plugin.getInstanceId() == withdrawCounterpartyRequest.connectorId,
    ) as PluginLedgerConnectorBesu;
    const pluginRegistry = new PluginRegistry({});
    pluginRegistry.add(connector);

    switch (withdrawCounterpartyRequest.htlcPackage) {
      case HtlcPackage.BesuErc20: {
        const pluginOptions: IPluginHtlcEthBesuErc20Options = {
          instanceId: uuidv4(),
          pluginRegistry,
        };

        const factoryHTLC = new PluginFactoryHtlcEthBesuErc20({
          pluginImportType: PluginImportType.Local,
        });
        const pluginHtlc = await factoryHTLC.create(pluginOptions);
        const withdrawRequest: WithdrawRequestBesuERC20 = {
          id: withdrawCounterpartyRequest.htlcId,
          secret: withdrawCounterpartyRequest.secret,
          web3SigningCredential:
            withdrawCounterpartyRequest.web3SigningCredential,
          connectorId: withdrawCounterpartyRequest.connectorId,
          keychainId: withdrawCounterpartyRequest.keychainId,
        };
        const res = await pluginHtlc.withdraw(withdrawRequest);
        return res;
      }
      case HtlcPackage.Besu: {
        const pluginOptions: IPluginHtlcEthBesuOptions = {
          instanceId: uuidv4(),
          pluginRegistry,
        };
        const factoryHTLC = new PluginFactoryHtlcEthBesu({
          pluginImportType: PluginImportType.Local,
        });
        const pluginHtlc = await factoryHTLC.create(pluginOptions);
        const withdrawRequest: WithdrawReq = {
          id: withdrawCounterpartyRequest.htlcId,
          secret: withdrawCounterpartyRequest.secret,
          web3SigningCredential:
            withdrawCounterpartyRequest.web3SigningCredential,
          connectorId: withdrawCounterpartyRequest.connectorId,
          keychainId: withdrawCounterpartyRequest.keychainId,
        };
        const res2 = await pluginHtlc.withdraw(withdrawRequest);
        return res2;
      }
      default: {
        throw new Error(
          `${fnTag} Unrecognized HTLC Package: ` +
            `${withdrawCounterpartyRequest.htlcPackage} Supported ones are: ` +
            `${Object.values(HtlcPackage).join(";")}`,
        );
      }
    }
  }
}
