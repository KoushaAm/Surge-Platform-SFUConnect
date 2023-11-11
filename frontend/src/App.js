// import { useState, useEffect } from "react";
import "../src/index.css";
import Dashboard from "./containers/Dashboard";

function App() {
  // api call to backend to get the hello world message
  // const [message, setMessage] = useState("")
  // useEffect(() => {
  // fetch('/hello')
  //   .then(res => res.text())
  //   .then(res => setMessage(res));
  // } , []);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">{message}</h1> */}
      <Dashboard />
    </div>
  );
}

export default App;
