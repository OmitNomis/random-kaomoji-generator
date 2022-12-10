import React, { useState } from "react";
import "./App.css";

function App() {
  // Use the useState hook to initialize an empty string state called "code"
  const [code, setCode] = useState("");

  return (
    <div className="App">
      <div className="code-block">
        {/* Use the code state as the content of the code block */}
        <p>{code}</p>
      </div>
      <button className="generate-button">Generate</button>
    </div>
  );
}

export default App;
