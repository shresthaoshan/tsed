import { Required, Schema } from "@tsed/schema";

@Schema({
	name: "authSchema",
})
export class AuthSchema {
	@Required()
	username: string;

	@Required()
	password: string;
}
