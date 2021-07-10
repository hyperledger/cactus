const tap = require("tap");
import { PluginFactoryHTLCCoordinator } from "../../../main/typescript/public-api";

tap.pass("Test file can be executed");

tap.test("Library can be loaded", (assert: any) => {
  assert.plan(1);
  assert.ok(PluginFactoryHTLCCoordinator);
});
