import React, { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");

  function handleGenerate() {
    setCode("New code goes here...");
  }

  // This function will be called when the copy-button is clicked
  function handleCopy() {
    // TODO: Add code to copy the code in the code-block to the clipboard
    // Get the text inside the code-block element
    const codeText = document.querySelector(".code-block p").textContent;

    // Create a hidden textarea element to hold the text
    const textarea = document.createElement("textarea");
    textarea.value = codeText;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    // Add the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Use the execCommand method to copy the text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);
  }

  return (
    <div className="App">
      <div className="code-block">
        {/* Add the copy-button to the top right of the code-block */}
        <div className="code-block-header">
          <button className="copy-button" onClick={handleCopy}>
            Copy Kaomoji
          </button>
        </div>
        <p>{code}</p>
      </div>
      <button className="generate-button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
}

export default App;
