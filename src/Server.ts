import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import "@tsed/ajv";
import "@tsed/swagger";
import "@tsed/mongoose";

import { config, rootDir } from "./config";
import { api_configs } from "./config/env";
import { IndexController } from "./pages/IndexController";

@Configuration({
	...config,
	acceptMimes: ["application/json"],
	httpPort: api_configs.PORT,
	httpsPort: false, // CHANGE
	mount: {
		"/": [IndexController],
		"/api": [`${rootDir}/modules/**/*.controller.ts`],
	},
	componentsScan: [
		`${rootDir}/modules/**/*.service.ts`,
		`${rootDir}/modules/**/*.middleware.ts`,
	],
	views: {
		root: `${rootDir}/../views`,
		viewEngine: "ejs",
	},
	exclude: ["**/*.spec.ts"],
})
export class Server {
	@Inject()
	app: PlatformApplication;

	@Configuration()
	settings: Configuration;

	$afterInit = async () => {};

	$beforeRoutesInit(): void {
		this.app
			.use(cors())
			.use(cookieParser())
			.use(compress({}))
			.use(methodOverride())
			.use(bodyParser.json())
			.use(
				bodyParser.urlencoded({
					extended: true,
				})
			);
	}
}
