import { useState, useEffect } from 'react';
import '../src/index.css'

function App() {

  const [message, setMessage] = useState("")
  // api call to backend to get the hellow world message
  useEffect(() => {
  fetch('/hello')
    .then(res => res.text())
    .then(res => setMessage(res));
  } , []);


  return (
    
    <div>
      
      <h1 className = "text-3xl font-bold underline">{message}</h1>
    </div>


  );
}

export default App;
