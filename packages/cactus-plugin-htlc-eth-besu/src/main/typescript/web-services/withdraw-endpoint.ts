import { Express, Request, Response } from "express";
import {
  Checks,
  Logger,
  LoggerProvider,
  LogLevelDesc,
} from "@hyperledger/cactus-common";
import Client from "../client";
import {
  IExpressRequestHandler,
  IWebServiceEndpoint,
} from "@hyperledger/cactus-core-api";
import { registerWebServiceEndpoint } from "@hyperledger/cactus-core";

export interface IWithdrawEndpointOptions {
  logLevel?: LogLevelDesc;
}
export class WithdrawEndpoint implements IWebServiceEndpoint {
  public static readonly CLASS_NAME = "WithdrawEndpoint";
  private readonly log: Logger;
  public get className() {
    return WithdrawEndpoint.CLASS_NAME;
  }
  private client: Client;
  constructor(public readonly options: IWithdrawEndpointOptions) {
    const fnTag = `${this.className}#constructor()`;
    Checks.truthy(options, `${fnTag} arg options`);
    const level = this.options.logLevel || "INFO";
    const label = this.className;
    this.log = LoggerProvider.getOrCreate({ level, label });
    this.client = new Client();
  }
  public getVerbLowerCase(): string {
    return "post";
  }
  public getPath(): string {
    return "/api/v1/plugins/@hyperledger/cactus-plugin-htlc-eth-besu/Withdraw/:id/:secret";
  }
  public registerExpress(expressApp: Express): IWebServiceEndpoint {
    registerWebServiceEndpoint(expressApp, this);
    return this;
  }

  public getExpressRequestHandler(): IExpressRequestHandler {
    return this.handleRequest.bind(this);
  }

  public async handleRequest(req: Request, res: Response): Promise<void> {
    const fnTag = "WithdrawEndpoint#handleRequest()";
    this.log.debug(`POST ${this.getPath()}`);
    const id = req.params["id"];
    const secret = req.params["secret"];
    try {
      //TODO: check that it works and remove from here.
      const result = this.client.sendTx(
        "Withdraw",
        [id, secret],
        "HashTimeLock",
        "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
        "",
        "",
        "",
      );
      res.send(result);
    } catch (ex) {
      this.log.error(`${fnTag} failed to serve request`, ex);
      res.status(500);
      res.statusMessage = ex.message;
      res.json({ error: ex.stack });
    }
  }
}
