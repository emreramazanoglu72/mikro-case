import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem('auth'));
  const state = { auth, setAuth };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;