import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useContext, createContext } from "react";
import { ApolloProvider } from "@apollo/client";
import UseFetchData from "../Hooks/UseFetchData";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const initialState = {};

const GlobalContext = createContext();

// Provider component that wraps your app ....
// ... available to any child component ...
export function GlobalProvide({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const { loading, error, data } = UseFetchData();
  return (
    <GlobalContext.Provider value={UseFetchData}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </GlobalContext.Provider>
  );
}
export const useData = () => {
  return useContext(GlobalContext);
};
