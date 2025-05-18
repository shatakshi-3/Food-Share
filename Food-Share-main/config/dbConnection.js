const mongoose = require("mongoose");

const connectDB = async() => {
	try
	{
		const db = process.env.MONGO_URI="mongodb+srv://FoodShare:cycle2003@foodshare.7sq0u.mongodb.net/";
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;