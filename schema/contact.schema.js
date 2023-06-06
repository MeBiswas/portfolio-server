const graphql = require("graphql");
const { GraphQLString, GraphQLObjectType } = graphql;

const ContactType = new GraphQLObjectType({
	name: "Contact",
	fields: () => ({
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		subject: { type: GraphQLString },
		message: { type: GraphQLString },
	}),
});

module.exports = ContactType;
