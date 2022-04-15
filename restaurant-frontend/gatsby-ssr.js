import React from 'react';
import client from "./src/utils/client/apolloClient";
import { ApolloProvider } from "@apollo/client";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
