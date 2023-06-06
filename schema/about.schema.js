const graphql = require("graphql");
const Skills_model = require("../models/skills.model");
const Profile_model = require("../models/profile.model");
const { GraphQLInt, GraphQLList, GraphQLString, GraphQLObjectType } = graphql;

const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    dob: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    website: { type: GraphQLString },
    job: { type: new GraphQLList(GraphQLString) },
  }),
});

const SkillsType = new GraphQLObjectType({
  name: "Skills",
  fields: () => ({
    skill: { type: GraphQLString },
    proficiency: { type: GraphQLInt },
  }),
});

const AboutType = new GraphQLObjectType({
  name: "About",
  fields: () => ({
    title: { type: GraphQLString },
    profileTitle: { type: GraphQLString },
    skillsTitle: { type: GraphQLString },
    profile: {
      type: new GraphQLList(ProfileType),
      resolve(parent, args) {
        return Profile_model.find({});
      },
    },
    skills: {
      type: new GraphQLList(SkillsType),
      resolve(parent, args) {
        return Skills_model.find({});
      },
    },
  }),
});

module.exports = { AboutType, SkillsType, ProfileType };
