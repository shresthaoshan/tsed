import { CustomBaseError } from "src/utils/error";

export class UserError extends CustomBaseError {
	constructor(message: string, code?: number, errors?: string[]) {
		super("USER_ERROR", message, code, errors);
	}
}
