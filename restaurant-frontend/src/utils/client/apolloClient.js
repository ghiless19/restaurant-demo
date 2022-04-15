import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'isomorphic-fetch';
const httplink = new HttpLink({
  uri: `http://localhost:1337/graphql`,
  fetch
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httplink
});

export default client;