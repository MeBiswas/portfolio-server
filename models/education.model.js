const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
	course: String,
	duration: String,
	institution: String,
	description: String,
});

module.exports = mongoose.model("Education", educationSchema);
