import { fsConfig } from "@dzcode.io/utils/dist/config";
import { getEnv } from "src/common/utils";

export const fullstackConfig = fsConfig(getEnv(), {
  hostname: location.hostname,
});
