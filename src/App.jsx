import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
<em></em>;
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Profile from "./component/Profile";
import About from "./component/About";
import Protected from "./component/Protected";
import User from "./component/User";
// import Errorbound from "./component/Errorbound";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          {isLoggedIn ? (
            <button onClick={logOut}>Logout</button>
          ) : (
            <button onClick={logIn}>Login</button>
          )}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 page Not Found</p>
                </main>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Profile />
                </Protected>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <Protected isLoggedIn={isLoggedIn}>
                  <About />
                </Protected>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <User />
    </>
  );
}

export default App;
