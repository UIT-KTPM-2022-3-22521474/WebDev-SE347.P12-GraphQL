const { gql } = require('apollo-server');
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: String,
  description: String,
});

// Create the User model
const User = mongoose.model('User', userSchema);

const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
    getUser(username: String!): User
  }

  type Mutation {
    setMessage(message: String): String
    addUser(username: String, description: String): User
    updateUserDescription(username: String, description: String): User
  }

  type User {
    username: String
    description: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: async () => {
      return await User.find();
    },
    getUser: async (_, { username }) => {
      return await User.findOne({ username });
    },
  },
  Mutation: {
    setMessage: (_, { message }) => {
      return message;
    },
    addUser: async (_, { username, description }) => {
      const user = new User({ username, description });
      await user.save();
      return user;
    },
    updateUserDescription: async (_, { username, description }) => {
      const user = await User.findOneAndUpdate(
        { username },
        { description },
        { new: true }
      );
      if (!user) {
        throw new Error(`User with username ${username} not found`);
      }
      return user;
    },
  },
};

module.exports = { typeDefs, resolvers };