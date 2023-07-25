import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  home: {},
  footer: {},
  error: "",
  loading: true,
  blog_static: {},
  about: {},
  contact: {},
  blogs: {},
  blog: {},
};

// Create context
export const StateContext = createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HOME":
      return {
        ...state,
        home: action.payload,
      };
    case "SET_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    case "SET_BLOG":
      return {
        ...state,
        blog: action.payload,
      };
    case "SET_FOOTER":
      return {
        ...state,
        footer: action.payload,
      };
    case "SET_BLOG_STATIC":
      return {
        ...state,
        blog_static: action.payload,
      };
    case "SET_ABOUT":
      return {
        ...state,
        about: action.payload,
      };
    case "SET_CONTACT":
      return {
        ...state,
        contact: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      throw new Error("Invalid action type");
  }
};

// Provider component
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
