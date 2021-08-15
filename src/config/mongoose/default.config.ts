export default {
	id: "tssed",
	url: process.env.DB_URL || "mongodb://localhost:27017/tsed",
	connectionOptions: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
};
