import React, { useState } from "react";
import "./App.css";
import { kaomoji } from "./kaomoji";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [code, setCode] = useState("Click on generate to start");

  function handleGenerate() {
    // Generate a random index for the kaomoji array
    const randomIndex = Math.floor(Math.random() * kaomoji.length);

    // Get the string at the random index in the kaomoji array
    const randomKaomoji = kaomoji[randomIndex];

    // Update the code state variable with the random kaomoji
    setCode(randomKaomoji);
  }

  // This function will be called when the copy-button is clicked
  function handleCopy() {
    // TODO: Add code to copy the code in the code-block to the clipboard
    // Get the text inside the code-block element
    toast("Copied to clipboard");
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
      <h1 style={{ fontFamily: "Rubik Vinyl", marginBottom: 100 }}>
        Random Kaomoji
      </h1>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
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
