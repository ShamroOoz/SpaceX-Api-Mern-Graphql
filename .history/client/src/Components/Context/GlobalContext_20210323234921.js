import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// Provider component that wraps your app ....
// ... available to any child component ...
export function GlobalProvide({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
