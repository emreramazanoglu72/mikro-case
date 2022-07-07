import { Router } from "@reach/router";
import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const { auth } = useContext(AppContext);
  return (
    <Router>
      {auth ? (
        <>
          <Home path="/" />
        </>
      ) : (
        <>
          <Login path="/" />
          <ResetPassword path="/reset" />
        </>
      )}
    </Router>
  );
};

export default App;
