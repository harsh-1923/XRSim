import React, { createContext, useEffect, useState } from "react";
import AuthServices from "../Services/AuthServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState({username: "", email: "", contact: ""});
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // console.log("activating auth context")
    const data = localStorage.getItem("cryptData");
    if (data) {
      const parsedData = JSON.parse(data);
      AuthServices.checkUser(parsedData).then((res) => {
        console.log(res)
        const { username, email, contact } = res.body.user;
        console.log(typeof res.body.user);
        setUser({
          username: username,
          email: email,
          contact: contact
        });
        console.log(user);
        setIsAuthenticated(true);
        setIsLoaded(true)
        console.log(isAuthenticated)
      })
      setIsLoaded(true);
    } else {
      AuthServices.isAuthenticated().then((data) => {
        console.log(data.user);
        console.log(typeof data.user)
        setUser(data.user);
        setIsAuthenticated(false);
        setIsLoaded(true);
      });
    }
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading</h1>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};

export default AuthProvider;





  // useEffect(() => {
  //   console.log(isAuthenticated, "checking user is authenticated or not")
  //   if (!isAuthenticated) {
  //     const data = localStorage.getItem("cryptData");
  //     if (data) {
  //       const parsedData = JSON.parse(data);
  //       AuthServices.checkUser(parsedData).then((res) => {
  //         console.log(res.body.user);
  //         const { username, email, contact } = res.body.user;
  //         const foundUser = {
  //           username: username,
  //           email: email,
  //           contact: contact,
  //         };
  //         setUser(foundUser);
  //         console.log(foundUser)
  //         console.log(user);
  //         setIsAuthenticated(true);
  //         console.log(user);
  //       });
  //     } else {
  //       setUser({ username: "", email: "", contact: "" });
  //       console.log(user);
  //       setIsAuthenticated(false);
  //     }
  //     setIsLoaded(true);
  //   } else {
  //     AuthServices.isAuthenticated().then((data) => {
  //       console.log(data.user);
  //       setUser(data.user);
  //       setIsAuthenticated(false);
  //       setIsLoaded(true);
  //     })
  //   }
  // }, []);





  // useEffect(() => {
  //   console.log("activating auth cotext")
  //   AuthServices.isAuthenticated().then((data) => {
  //     console.log(data.user);
  //     setUser(data.user);
  //     setIsAuthenticated(false);
  //     setIsLoaded(true);
  //   })
  // }, [])