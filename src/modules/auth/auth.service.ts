import { Inject, Injectable, ProviderScope, ProviderType } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { verifyPassword } from "src/utils/password";
import { getToken } from "src/utils/token";
import { User } from "../user/user.model";
import { AuthError } from "./auth.error";

@Injectable({
	type: ProviderType.SERVICE,
	scope: ProviderScope.SINGLETON,
})
export class AuthService {
	@Inject(User) private userModel: MongooseModel<User>;

	async authenticate(username: string, password: string) {
		const user = await this.userModel.findOne({ username });

		if (!user)
			throw new AuthError(
				"Cannot authenticate. User does not exist.",
				400
			);

		if (!verifyPassword(password, user.password))
			throw new AuthError(
				"Cannot authenticate. Credentials do not match.",
				401
			);

		return user;
	}
	generateToken(payload: any) {
		return getToken(payload);
	}
}
