import { SwaggerSettings } from "@tsed/swagger";

export const swaggerConfig: SwaggerSettings[] = [
	{
		path: "/api/v2/docs",
		specVersion: "2.0",
	},
	{
		path: "/api/docs",
		specVersion: "3.0.1",
	},
];
