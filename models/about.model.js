const mongoose = require("mongoose");
const schema = mongoose.Schema;

const aboutSchema = new schema({
	title: String,
	skillsTitle: String,
	profileTitle: String,
});

module.exports = mongoose.model("About", aboutSchema);
