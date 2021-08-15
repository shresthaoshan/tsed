import { Model, ObjectID, Unique } from "@tsed/mongoose";
import {
	Default,
	Email,
	Enum,
	Ignore,
	MinLength,
	Required,
} from "@tsed/schema";

export enum Roles {
	SUPERADMIN = "superadmin",
	ADMIN = "admin",
	USER = "user",
}

@Model({
	name: "User",
})
export class User {
	@ObjectID("id")
	_id: string;

	@Required()
	@MinLength(5)
	fullName: string;

	@Email()
	@Unique()
	@Required()
	email: string;

	@Unique()
	@Required()
	username: string;

	@Required()
	@Ignore((_, ctx) => !ctx.mongoose)
	password: string;

	@Enum(Roles)
	@Default(Roles.USER)
	role: Roles;
}
