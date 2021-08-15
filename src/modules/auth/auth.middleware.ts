import { IMiddleware, Middleware, Req } from "@tsed/common";
import { verifyToken } from "src/utils/token";
import { AuthError } from "./auth.error";

@Middleware()
export class isAuthorized implements IMiddleware {
	async use(@Req() request: Req) {
		const { authorization } = request.headers;
		if (!authorization || !authorization.length)
			throw new AuthError("Authorization token required.");

		const [tokenType, token] = authorization.split(" ");
		if (!tokenType || !token || tokenType !== "Bearer")
			throw new AuthError("Invalid token.");

		const payload = await verifyToken(token);

		console.log({ payload });
	}
}
