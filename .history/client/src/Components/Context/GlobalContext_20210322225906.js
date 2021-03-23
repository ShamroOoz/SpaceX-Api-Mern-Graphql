import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useContext, createContext } from "react";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const globalContext = createContext();

// Provider component that wraps your app ....
// ... available to any child component ...
export function globalProvide({ children }) {
  return (
    <globalContext.Provider value={client}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </globalContext.Provider>
  );
}
export const useData = () => {
  return useContext(globalContext);
};
