const graphql = require("graphql");
const { GraphQLList, GraphQLString, GraphQLObjectType } = graphql;

const Introduction = new GraphQLObjectType({
  name: "Intro",
  fields: () => ({
    name: { type: GraphQLString },
    specialization: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = Introduction;
