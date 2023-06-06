const graphql = require("graphql");
const { GraphQLList, GraphQLString, GraphQLObjectType } = graphql;
const Education_model = require("../models/education.model");
const Experience_model = require("../models/experience.model");

const ExperienceType = new GraphQLObjectType({
	name: "Experience",
	fields: () => ({
		tenure: { type: GraphQLString },
		company: { type: GraphQLString },
		designation: { type: GraphQLString },
		description: { type: GraphQLString },
	}),
});

const EducationType = new GraphQLObjectType({
	name: "Education",
	fields: () => ({
		course: { type: GraphQLString },
		duration: { type: GraphQLString },
		institution: { type: GraphQLString },
		description: { type: GraphQLString },
	}),
});

const ResumeType = new GraphQLObjectType({
	name: "Resume",
	fields: () => ({
		education: {
			type: new GraphQLList(EducationType),
			resolve(parent, args) {
				return Education_model.find({});
			},
		},
		experience: {
			type: new GraphQLList(ExperienceType),
			resolve(parent, args) {
				return Experience_model.find({});
			},
		},
	}),
});

module.exports = { ResumeType, ExperienceType, EducationType };
