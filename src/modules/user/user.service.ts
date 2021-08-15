import { User } from "./user.model";
import { MongooseModel } from "@tsed/mongoose";
import { UserCreateSchema } from "./user.schema";
import { hashPassword } from "src/utils/password";
import { Inject, Injectable, ProviderScope, ProviderType } from "@tsed/di";

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

	findOne(_id: string) {
		return this.model.findById(_id);
	}
}
