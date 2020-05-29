import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4242/graphql",
});

export default client;
