import { Inject, Injectable, ProviderScope, ProviderType } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { verifyPassword } from "src/utils/password";
import { getToken } from "src/utils/token";
import { User } from "../user/user.model";
import { UserListSchema } from "../user/user.schema";

@Injectable({
	type: ProviderType.SERVICE,
	scope: ProviderScope.SINGLETON,
})
export class AuthService {
	@Inject(User) private userModel: MongooseModel<User>;

	async authenticate(username: string, password: string) {
		const user = await this.userModel.findOne({ username });

		if (!user) throw new Error("Cannot authenticate. User does not exist.");

		if (!verifyPassword(password, user.password))
			throw new Error("Cannot authenticate. Credentials do not match.");

		return user;
	}
	generateToken(payload: any) {
		return getToken(payload);
	}
}
