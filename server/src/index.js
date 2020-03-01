const { allBowlersResolver, addBowlerResolver } = require('./resolvers');
const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    info: () => `This is a test API for Jon's bowling data!`,
    bowlers: allBowlersResolver
  },
  Mutation: {
    addBowler: addBowlerResolver
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.start(() => console.log('Server is running on port 4000...'));