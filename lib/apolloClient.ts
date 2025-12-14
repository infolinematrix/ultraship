import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "/api/graphql", // 
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link, 
});
