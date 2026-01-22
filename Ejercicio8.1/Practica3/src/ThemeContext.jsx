import React, { createContext, useReducer, useContext } from "react";

const ThemeStateContext = createContext(null);
const ThemeDispatchContext = createContext(null);

const initialState = {
  primaryColor: "#6c5ce7",
  fontSize: 16,
  textTransform: "none",
};

function themeReducer(state, action) {
  switch (action.type) {
    case "SET_PRIMARY_COLOR":
      return { ...state, primaryColor: action.payload };
    case "SET_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "SET_TEXT_TRANSFORM":
      return { ...state, textTransform: action.payload };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
