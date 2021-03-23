import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useContext, createContext, useReducer } from "react";
import { ApolloProvider } from "@apollo/client";
import UseFetchData from "../Hooks/UseFetchData";
import { LAUNCH_Query, LAUNCHES_Query } from "../QueryList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const initialState = {
  loading: false,
  error: false,
  data: null,
};
//
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_LAUNCH":
      const { loading, error, data } = UseFetchData(LAUNCHES_Query);
      return { ...state, loading, error, data };
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
    dispatch({ type: "GET_ALL_LAUNCH" });
  };
  const getlaunchListner = () => {
    dispatch({ type: "GET_LAUNCH" });
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
