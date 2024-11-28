const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./db/connection');
const schema = require('./schema');

const startApolloServer = async () => {
  const app = express();

  // Connect to MongoDB Atlas
  await db.connect();

  // Setup Apollo Server
  const server = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: schema.resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}/graphql`)
  );
};

module.exports = { startApolloServer };