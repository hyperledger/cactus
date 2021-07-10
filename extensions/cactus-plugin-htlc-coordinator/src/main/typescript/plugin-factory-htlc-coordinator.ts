import {
  IPluginFactoryOptions,
  PluginFactory,
} from "@hyperledger/cactus-core-api";

import {
  IPluginHTLCCoordinatorOptions,
  PluginHTLCCoordinator,
} from "./plugin-htlc-coordinator";

export class PluginFactoryHTLCCoordinator extends PluginFactory<
  PluginHTLCCoordinator,
  IPluginHTLCCoordinatorOptions,
  IPluginFactoryOptions
> {
  async create(
    pluginOptions: IPluginHTLCCoordinatorOptions,
  ): Promise<PluginHTLCCoordinator> {
    return new PluginHTLCCoordinator(pluginOptions);
  }
}
