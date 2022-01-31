// import { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useEffect } from "react";
import ParentAuthReducer from "./AAuthReducer";

const INITIAL_STATE = {
  parent: JSON.parse(localStorage.getItem("parent")) || null,
  isFetching: false,
  error: false,
};

export const ParentAuthContext = createContext(INITIAL_STATE);

export const ParentAuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ParentAuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.parent));
  }, [state.parent]);

  return (
    <ParentAuthContext.Provider
      value={{
        parent: state.parent,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ParentAuthContext.Provider>
  );
};
