import React from "react";
import Navbar from "./componets/Navbar";
import Display from "./componets/Display";
import Operators from "./componets/Operators";
import Numbers from "./componets/Numbers";
import Buttons from "./componets/Buttons";
import "./App.css"
import Digits from "./componets/Digits";
function App() {
  return (
    <div className="App">
      <div className="calculator">
        <nav className="navbar">
          <Navbar />
        </nav>
        <header className="display">
          <Display />
        </header> 
        <article className="buttons">
          <Digits/>
          <Operators/>
          <Buttons/>
        </article>
      </div>
    </div>
  );
}

export default App;
