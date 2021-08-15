import { Controller, Get } from "@tsed/common";
import { version } from "src/config";

@Controller("/")
export class IndexController {
	@Get("/")
	get() {
		return {
			version: `v${version}`,
		};
	}
}
