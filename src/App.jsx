import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {AuthContext} from './context/AuthProvider';
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
   useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "admin") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      setLoggedIn(true);
    } else if (authData && authData.employees.find(e=>e.email===email && e.password===password)) {
      setUser("employee");
      setLoggedIn(true);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        user === "admin" ? <AdminDashboard /> : <EmployeeDashboard data ={loggedInUserData} />
      )}
    </>
  );
};

export default App;
