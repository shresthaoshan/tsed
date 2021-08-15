import { BodyParams, Controller, Get, PathParams, Post } from "@tsed/common";
import { Returns } from "@tsed/schema";
import { UserCreateSchema, UserListSchema } from "./user.schema";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
	constructor(private service: UserService) {}

	@Post("/")
	@Returns(200, UserListSchema)
	save(@BodyParams() model: UserCreateSchema) {
		return this.service.create(model);
	}

	@Get("/:id")
	@Returns(200, UserListSchema)
	getOne(@PathParams("id") id: string) {
		return this.service.findOne(id);
	}

	@Get("/")
	@(Returns(200, Array).Of(UserListSchema))
	getAll() {
		return this.service.findAll();
	}
}
