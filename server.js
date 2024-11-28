const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./src/schema/index.js');

async function startApolloServer() {
  // Connect to MongoDB
  await mongoose.connect('mongodb+srv://22521474:22521474@terry.lc9ds.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();