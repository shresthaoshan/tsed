import { join } from "path";
import { loggerConfig } from "./logger";
import { swaggerConfig } from "./swagger";

import mongooseConfig from "./mongoose";

export const { version, homepage } = require("../../package.json");
export const rootDir = join(__dirname, "..");

export const config: Partial<TsED.Configuration> = {
	version,
	rootDir,
	logger: loggerConfig,
	mongoose: mongooseConfig,
	swagger: swaggerConfig,
	// additional shared configuration
};
