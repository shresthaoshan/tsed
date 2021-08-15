import { MinLength, Property, Required, Schema } from "@tsed/schema";

@Schema({ name: "authTokenSchema" })
export class AuthTokenSchema {
	@Property()
	token: string;
}

@Schema({
	name: "authSchema",
})
export class AuthSchema {
	@Required()
	username: string;

	@Required()
	@MinLength(8)
	password: string;
}
