export * from "./generated/openapi/typescript-axios/index";
import { IPluginFactoryOptions } from "@hyperledger/cactus-core-api";
export {
  IPluginHTLCCoordinatorOptions,
  PluginHTLCCoordinator,
} from "./plugin-htlc-coordinator";

export { PluginFactoryHTLCCoordinator } from "./plugin-factory-htlc-coordinator";
import { PluginFactoryHTLCCoordinator } from "./plugin-factory-htlc-coordinator";

export * from "./generated/openapi/typescript-axios/index";

export async function createPluginFactory(
  pluginFactoryOptions: IPluginFactoryOptions,
): Promise<PluginFactoryHTLCCoordinator> {
  return new PluginFactoryHTLCCoordinator(pluginFactoryOptions);
}
