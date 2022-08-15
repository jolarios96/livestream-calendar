import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [serverData, setServerData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setServerData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {typeof serverData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        serverData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
