const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookID: String
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me(username: String): User
  }

  type Query {
    book: [Book]
  }

  type Mutation {
    createUser(username: String, email: String): User
  }

`;

module.exports = typeDefs;
