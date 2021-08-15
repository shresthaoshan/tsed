import { Context, IMiddleware, Middleware } from "@tsed/common";
import { verifyToken } from "src/utils/token";
import { Roles } from "../user/user.model";
import { UserListSchema } from "../user/user.schema";
import { AuthError } from "./auth.error";

@Middleware()
export class AuthTokenMiddleware implements IMiddleware {
	async use(@Context() ctx: Context) {
		const { authorization } = ctx.request.headers;
		if (!authorization || !authorization.length)
			throw new AuthError("Authorization token required.");

		const [tokenType, token] = authorization.split(" ");
		if (!tokenType || !token || tokenType !== "Bearer")
			throw new AuthError("Invalid token.");

		const payload = await verifyToken(token);

		ctx.set("user", payload);
	}
}
@Middleware()
export class IsAdmin implements IMiddleware {
	async use(@Context() ctx: Context) {
		const payload: UserListSchema = ctx.get("user");

		if (!payload)
			throw new Error(
				"Invalid middleware assignment. Use this middleware only after AuthTokenMiddleware."
			);

		if (payload.role !== Roles.ADMIN && payload.role !== Roles.SUPERADMIN)
			throw new AuthError("Access denied. Needs admin access.", 403);
	}
}
