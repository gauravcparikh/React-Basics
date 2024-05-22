import React, { useState } from "react";
function StateHook() {
  const [data, setData] = useState("Anil");
  return (
    <div className="App">
      <h1>Hooks in React {data}</h1>
      <button
        onClick={() =>
          setData(
            data === "Anil" ? "Peter" : data === "Peter" ? "Anil" : "Peter"
          )
        }
      >
        Update State
      </button>
    </div>
  );
}

export default StateHook;
