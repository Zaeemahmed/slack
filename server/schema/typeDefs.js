const { gql } = require("apollo-server");
const typeDefs = gql`
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
  }
  type Team {
    id: Int!
    name: String!
    owner: User!
    channels: [Channel!]!
  }
  type User {
    username: String!
    email: String!
  }

  type Query {
    User(id: Int!): User!
    Users: [User!]!
    Message(id: Int!): Message!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }
`;

module.exports = { typeDefs };
