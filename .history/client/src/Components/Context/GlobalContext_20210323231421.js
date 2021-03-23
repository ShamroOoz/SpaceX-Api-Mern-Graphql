import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useContext, createContext, useReducer } from "react";
import { ApolloProvider } from "@apollo/client";
import UseFetchData from "../Hooks/UseFetchData";
import { GET_LAUNCH_Query, GET_LAUNCHES_Query } from "./QueryList";
import { useQuery } from "@apollo/client";

// const { loading, error, data } = useQuery(Query);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const initialState = {};
//
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_LAUNCH":
      break;
    case "GET_LAUNCH":
      break;

    default:
      return state;
  }
};

const GlobalContext = createContext();

// Provider component that wraps your app ....
// ... available to any child component ...
export function GlobalProvide({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getalllaunchesListner = () => {
    dispatch({});
  };
  const getlaunchListner = () => {
    dispatch({});
  };
  return (
    <GlobalContext.Provider value={UseFetchData}>
      <ApolloProvider
        getalllaunchesListner={getalllaunchesListner}
        getlaunchListner={getlaunchListner}
        client={client}
      >
        {children}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}
export const useData = () => {
  return useContext(GlobalContext);
};
