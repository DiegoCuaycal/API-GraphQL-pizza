// Packages
const { ApolloServer } = require('apollo-server');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// Load and merge type definitions
const typeDefsArray = loadFilesSync(`${__dirname}/../type-system/*.graphql`);
const typeDefs = mergeTypeDefs(typeDefsArray);

// Load resolvers
const resolvers = require('../resolvers/pizza.resolver');

// Create schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Config and start server
const server = new ApolloServer({
  schema,
});

server.listen(4000).then(({ url }) => {
  console.log('🚀 Server running at', url);
});
