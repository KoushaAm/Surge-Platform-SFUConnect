// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../src/index.css";

import { ExploreClubsProvider } from "./context/ExploreClubsContext";

import PageLayout from "./components/layout/PageLayout";
import AppLayout from "./components/layout/AppLayout";

import Home from "./containers/Home";
import About from "./containers/About";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Error from "./containers/Error";
import UserProfile from "./containers/UserProfile";
import Dashboard from "./containers/Dashboard";
import MyClubs from "./containers/MyClubs";
import ExploreClubs from "./containers/ExploreClubs";

function App() {
  //   // api call to backend to get the hello world message
  //   const [message, setMessage] = useState("");
  //   useEffect(() => {
  //     fetch("/hello")
  //       .then((res) => res.text())
  //       .then((res) => setMessage(res));
  //   }, []);

  return (
    <div>
      <ExploreClubsProvider>
        {/* <h1 className="text-3xl font-bold underline">{message}</h1> */}
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Route>

          <Route path="/app" element={<AppLayout />}>
            <Route path="/app/profile" element={<UserProfile />} />
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/myclubs" element={<MyClubs />} />
            <Route path="/app/exploreclubs" element={<ExploreClubs />} />
          </Route>
        </Routes>
      </ExploreClubsProvider>
    </div>
  );
}

export default App;
