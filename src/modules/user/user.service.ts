import { User } from "./user.model";
import { MongooseModel } from "@tsed/mongoose";
import { UserCreateSchema } from "./user.schema";
import { hashPassword } from "src/utils/password";
import { Inject, Injectable, ProviderScope, ProviderType } from "@tsed/di";
import { UserError } from "./user.error";

@Injectable({
	type: ProviderType.SERVICE,
	scope: ProviderScope.SINGLETON,
})
export class UserService {
	@Inject(User) private model: MongooseModel<User>;

	create(user: UserCreateSchema) {
		return this.model.create({
			...user,
			password: hashPassword(user.password),
		});
	}

	findAll() {
		return this.model.find({});
	}

	async findOne(_id: string) {
		const user = await this.model.findById(_id);
		if (!user) throw new UserError(`User with id ${_id} not found.`, 404);
		return user;
	}
}
