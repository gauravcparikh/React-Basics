import React,{useState} from 'react'
function ControlledComponent() {
  const [val,setVal]=useState("")

   return (
    <div className="App">
      <h1>Controlled Component </h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
   <h1>{val}</h1>
    </div>
  );

}
export default ControlledComponent;