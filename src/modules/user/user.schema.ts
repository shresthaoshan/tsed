import { MongooseSchema } from "@tsed/mongoose";
import { Email, MinLength, Property, Required, Schema } from "@tsed/schema";

@Schema({ name: "userSchema" })
export class UserSchema {
	@Property()
	fullName: string;

	@Property()
	@Email()
	email: string;

	@Property()
	username: string;
}

@Schema({ name: "userListSchema" })
export class UserListSchema extends UserSchema {
	@Property()
	id: string;
}

@Schema({ name: "userCreateSchema" })
export class UserCreateSchema extends UserSchema {
	@Required()
	@MinLength(8)
	password: string;
}
