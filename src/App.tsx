import React, { useState } from "react";
import "./App.css";

function App() {
  const [ method, setMethod ] = useState(0)

  const handleFormSubmit = () => {

  }

  return (
    <div className="root">
      <div className="container">
        <div className="inputArea">
          <form>
            <select name="method" value={method} onChange={(e) => {setMethod(parseInt(e.target.value, 10))}}>
              <option value={0}>GET</option>
              <option value={1}>POST</option>
            </select>
            <input type="text"  />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="result">

        </div>
      </div>
    </div>
  );
}

export default App;
