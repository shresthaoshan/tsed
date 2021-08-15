import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "./Server";

async function bootstrap() {
	try {
		$log.info("SERVER:: Starting...");
		const platform = await PlatformExpress.bootstrap(Server);

		await platform.listen();
		$log.info("SERVER:: Initialized.");
	} catch (er) {
		$log.error(er);
	}
}

bootstrap();
