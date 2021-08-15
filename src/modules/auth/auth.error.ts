import { CustomBaseError } from "src/utils/error";

export class AuthError extends CustomBaseError {
	constructor(message: string, code?: number, errors?: string[]) {
		super("AUTH_ERROR", message, code, errors);
	}
}
