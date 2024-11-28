const User = require('../models/User');

const resolvers = {
  Query: {
    getUser: async (_, { username }) => {
      return await User.findOne({ username });
    },
  },
  Mutation: {
    updateUserDescription: async (_, { username, description }) => {
      const user = await User.findOneAndUpdate(
        { username },
        { description },
        { new: true }
      );
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    addUser: async (_, { username, description }) => {
      const newUser = new User({ username, description });
      return await newUser.save();
    },
  },
};

module.exports = resolvers;