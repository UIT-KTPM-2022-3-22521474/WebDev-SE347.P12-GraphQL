const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    description: String
  }

  type Query {
    getUser(username: String!): User
  }

  type Mutation {
    updateUserDescription(username: String!, description: String!): User
    addUser(username: String!, description: String): User
  }
`;

module.exports = typeDefs;