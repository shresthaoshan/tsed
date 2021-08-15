import { sha512 } from "hash.js";
import { auth_configs } from "src/config/auth";

export const hashPassword = (password: string) =>
	sha512()
		.update(auth_configs.SALT + password)
		.digest("hex");

export const verifyPassword = (password: string, hash: string) =>
	hashPassword(password) === hash;
