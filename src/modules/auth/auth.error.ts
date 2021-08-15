import { CustomBaseError } from "src/utils/error";

export class AuthError extends CustomBaseError {
	constructor(message: string, code?: number, exception?: Error) {
		super(
			"AUTH_ERROR",
			message,
			code,
			exception ? [exception.message] : []
		);
	}
}
