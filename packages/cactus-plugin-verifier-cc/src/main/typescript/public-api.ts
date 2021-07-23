export {
  E_KEYCHAIN_NOT_FOUND,
  IPluginVerifierCcOptions as IPluginLedgerConnectorBesuOptions,
  PluginVerifierCc as PluginLedgerConnectorBesu,
} from "./plugin-ledger-verifier-cc";
export { PluginFactoryVerifier as PluginFactoryLedgerConnector } from "./plugin-factory-verifier";

import { IPluginFactoryOptions } from "@hyperledger/cactus-core-api";
import { PluginFactoryVerifier } from "./plugin-factory-verifier";

export {
  VerifierCcApiClient as BesuApiClient,
  VerifierCcApiClientOptions as BesuApiClientOptions,
} from "./api-client/verifier-cc-api-client";

export * from "./generated/openapi/typescript-axios/api";

export async function createPluginFactory(
  pluginFactoryOptions: IPluginFactoryOptions,
): Promise<PluginFactoryVerifier> {
  return new PluginFactoryVerifier(pluginFactoryOptions);
}
