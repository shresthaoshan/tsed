export class CustomBaseError {
	status: number;
	errors: string[];

	constructor(
		readonly name: string,
		public message: string,
		status?: number,
		errors?: string[]
	) {
		if (status) this.status = status;
		if (errors && errors.length) this.errors = errors;
	}
}
