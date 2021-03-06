import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [name, setname] = useState(false);
  function change() {
    setname(!name);
  }
  return (
    <div id="main">
      <h1 id="marco-polo">{name ? "Polo" : "Marco"}</h1>
      <button id="marco-polo-toggler" onClick={change}>
        {name ? "Marco" : "Polo"}
      </button>
    </div>
  );
};

export default App;
