import { CustomBaseError } from "src/utils/error";

export class UserError extends CustomBaseError {
	constructor(message: string, code?: number, exception?: Error) {
		super(
			"USER_ERROR",
			message,
			code,
			exception ? [exception.message] : []
		);
	}
}
