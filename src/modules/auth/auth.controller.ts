import { BodyParams, Controller, Post } from "@tsed/common";
import { Returns } from "@tsed/schema";
import { AuthSchema, AuthTokenSchema } from "./auth.schema";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
	constructor(private service: AuthService) {}

	@Post("/get-token")
	@Returns(200, AuthTokenSchema)
	async getToken(@BodyParams() model: AuthSchema) {
		const { username, password } = model;

		const { email, id, role } = await this.service.authenticate(
			username,
			password
		);
		const token = this.service.generateToken({ id, email, username, role });

		return { token };
	}
}
