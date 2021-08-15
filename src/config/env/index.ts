export const config = require("dotenv").config();

export const isProduction = process.env.NODE_ENV === "production";

export const api_configs = {
	PORT: process.env.PORT || 3011,
};
