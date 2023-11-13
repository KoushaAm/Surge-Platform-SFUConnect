// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../src/index.css";

import PageLayout from "./components/layout/PageLayout";
import AppLayout from "./components/layout/AppLayout";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Error from "./containers/Error";
import Dashboard from "./containers/Dashboard";

function App() {
  // api call to backend to get the hello world message
  // const [message, setMessage] = useState("");
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((res) => res.text())
  //     .then((res) => setMessage(res));
  // }, []);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">{message}</h1> */}
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="/app" element={<AppLayout />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
