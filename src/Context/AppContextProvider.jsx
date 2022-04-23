import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let authUser = JSON.parse(localStorage.getItem("auth"));
  if (!authUser) {
    authUser = false;
  }
  const [auth, setAuth] = useState(authUser);
  const [count, setCount] = useState(0);

  const handleSignin = () => {
    setAuth(true);
    localStorage.setItem("auth", JSON.stringify(true));
    setCount(count + 1);
  };
  const handleSignout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };
  const value = { auth, count, handleSignin, handleSignout };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
