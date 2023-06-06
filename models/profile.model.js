const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	dob: String,
	name: String,
	job: [String],
	email: String,
	website: String,
});

module.exports = mongoose.model("Profile", profileSchema);
