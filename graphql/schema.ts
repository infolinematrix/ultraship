import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    designation: String
    gender: String
    attendence: Int
  }

  type Query {
    listEmployees(age: Int, designation: String): [Employee!]!
    employeeById(id: ID!): Employee
  }

  type Mutation {
    addEmployee(
      name: String!
      age: Int!
      designation: String
      gender: String
      attendence: Int
    ): Employee!
    updateEmployee(
      id: ID!
      name: String!
      age: Int!
      designation: String!
      gender: String!
      attendence: Int!
    ): Employee
  }
`;
