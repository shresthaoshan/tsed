import { Controller, Get } from "@tsed/common";
import { version, homepage } from "src/config";

@Controller("/")
export class IndexController {
	@Get("/")
	get() {
		return {
			version: `v${version}`,
			docs: homepage + "/api/docs",
		};
	}
}
