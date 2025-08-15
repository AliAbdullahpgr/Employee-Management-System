import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "admin") {
      setUser("admin");
      setLoggedIn(true);
    } else if (email === "employee@me.com" && password === "employee") {
      setUser("employee");
      setLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!loggedIn && <Login handleLogin={handleLogin} />}
      {loggedIn &&
        (user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />)}
    </>
  );
};

export default App;
