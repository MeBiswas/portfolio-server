const graphql = require("graphql");
// DB Models
const Intro_model = require("../models/intro.model");
const About_model = require("../models/about.model");
const Skills_model = require("../models/skills.model");
const Contact_model = require("../models/contact.model");
const Profile_model = require("../models/profile.model");
const Education_model = require("../models/education.model");
const Experience_model = require("../models/experience.model");
// GQL Schemas
const ContactType = require("./contact.schema");
const IntroductionType = require("./introduction.schema");
const { AboutType, SkillsType, ProfileType } = require("./about.schema");
const {
	ResumeType,
	EducationType,
	ExperienceType,
} = require("./resume.schema");

const {
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLObjectType,
} = graphql;

const RootQuery = new GraphQLObjectType({
	name: "Get_Portfolio",
	fields: {
		intro: {
			type: new GraphQLList(IntroductionType),
			resolve(parent, args) {
				return Intro_model.find({});
			},
		},
		about: {
			type: new GraphQLList(AboutType),
			resolve(parent, args) {
				return About_model.find({});
			},
		},
		resume: {
			type: ResumeType,
			resolve(parent, args) {
				return this;
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: "Mutate_Portfolio",
	fields: {
		addAbout: {
			type: AboutType,
			args: {
				title: { type: new GraphQLNonNull(GraphQLString) },
				profileTitle: { type: new GraphQLNonNull(GraphQLString) },
				skillsTitle: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let about = new About_model({
					title: args.title,
					profileTitle: args.profileTitle,
					skillsTitle: args.skillsTitle,
				});
				return about.save();
			},
		},
		addIntro: {
			type: IntroductionType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				specialization: {
					type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
				},
			},
			resolve(parent, args) {
				let intro = new Intro_model({
					name: args.name,
					specialization: args.specialization,
				});
				return intro.save();
			},
		},
		addSkills: {
			type: SkillsType,
			args: {
				skill: { type: new GraphQLNonNull(GraphQLString) },
				proficiency: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, args) {
				let skills = new Skills_model({
					skill: args.skill,
					proficiency: args.proficiency,
				});
				return skills.save();
			},
		},
		addProfile: {
			type: ProfileType,
			args: {
				dob: { type: new GraphQLNonNull(GraphQLString) },
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				website: { type: new GraphQLNonNull(GraphQLString) },
				job: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
			},
			resolve(parent, args) {
				let profile = new Profile_model({
					dob: args.dob,
					job: args.job,
					name: args.name,
					email: args.email,
					website: args.website,
				});
				return profile.save();
			},
		},
		addContact: {
			type: ContactType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				subject: { type: new GraphQLNonNull(GraphQLString) },
				message: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let cont = new Contact_model({
					name: args.name,
					email: args.email,
					subject: args.subject,
					message: args.message,
				});
				return cont.save();
			},
		},
		addEducation: {
			type: EducationType,
			args: {
				course: { type: new GraphQLNonNull(GraphQLString) },
				duration: { type: new GraphQLNonNull(GraphQLString) },
				institution: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let edu = new Education_model({
					course: args.course,
					duration: args.duration,
					institution: args.institution,
					description: args.description,
				});
				return edu.save();
			},
		},
		addExperience: {
			type: ExperienceType,
			args: {
				tenure: { type: new GraphQLNonNull(GraphQLString) },
				company: { type: new GraphQLNonNull(GraphQLString) },
				designation: { type: new GraphQLNonNull(GraphQLString) },
				description: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let exp = new Experience_model({
					tenure: args.tenure,
					company: args.company,
					designation: args.designation,
					description: args.description,
				});
				return exp.save();
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
