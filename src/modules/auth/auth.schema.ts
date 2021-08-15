import { Property, Schema } from "@tsed/schema";

@Schema({ name: "authTokenSchema" })
export class AuthTokenSchema {
	@Property()
	token: string;
}
