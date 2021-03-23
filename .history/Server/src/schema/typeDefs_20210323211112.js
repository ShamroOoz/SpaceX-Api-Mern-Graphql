import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    launches: [Launch!]!
    launch(Launch_id: String!): Launch
    rockets: [Rocket!]!
    rocket(rocket_id: ID!): Rocket
  }

  type Launch {
    id: String
    flight_number: Int
    name: String
    details: String
    launch_year: String
    date_local: String
    success: String
    rocket: Rocket
  }
  type Rocket {
    id: ID
    name: String
    country: String
    type: String
    description: String
  }
`;

export default typeDefs;
