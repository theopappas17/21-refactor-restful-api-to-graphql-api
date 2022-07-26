const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Number
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookID: String
    authors: Array
    description: String
    title: String
    image: Buffer
    link: String
  }

  type Auth {
    token: ID
    user: { ref: 'User' }
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!)
    login(email: String!)
    saveBook(author: Array, description: String, title: String, bookId: ID, image: Buffer, link: String): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
