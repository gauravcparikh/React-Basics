import React,{useRef} from 'react'
function RefHook() {
  let inputRef=useRef(null);
  function controlInput()
  {
  //  inputRef.current.value="abc"
  // inputRef.current.style.display="none"
  inputRef.current.focus()
  alert(inputRef.current.value);
  }
  return (
    <div className="App">
      <h1>useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>Handle Input</button>
    </div>
  );

}

export default RefHook;