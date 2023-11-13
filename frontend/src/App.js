// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../src/index.css";

import AppLayout from "./components/layout/AppLayout";

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
        <Route path="/app" element={<AppLayout />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
