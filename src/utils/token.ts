import { sign, verify } from "jsonwebtoken";
import { auth_configs } from "src/config/auth";
import { UserListSchema } from "src/modules/user/user.schema";
import { CustomBaseError } from "./error";

export const getToken = (payload: any) =>
	sign(payload, auth_configs.TOKEN_SECRET);

export const verifyToken = async (token: string) => {
	try {
		const payload = verify(
			token,
			auth_configs.TOKEN_SECRET
		) as UserListSchema;
		return payload;
	} catch (ex) {
		throw new CustomBaseError(
			"TOKEN_ERROR",
			"Token verification failed.",
			401,
			[ex.message]
		);
	}
};
