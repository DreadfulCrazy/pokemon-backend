const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    description: String
    password: String
    createAt: String
  }

  type Query {
    # User
    getUser: User
  }
`

module.exports = typeDefs