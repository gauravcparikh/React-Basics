import logo from './logo.svg';
import './App.css';
import {User} from './Functions'
import {StateEX} from './StateFunction'
import React,{useState,useEffect,useRef} from 'react'
import Student from './PropStudent'
import Toggle from './Toggle'
import HandleForm from './HandleForm';
import ConditionalRendering from './ConditionalRendering'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './BasicFormValidation';
import FuncUser from './User';
import RenderUser from './LifeCycleComponents/RenderUser';
import ComponentDidMount from './LifeCycleComponents/ComponentDidMount';
import ComponentDidUpdate from './LifeCycleComponents/componentDidUpdate';
import ShouldCMUpdate from './LifeCycleComponents/shouldComponentUpdate';
import ComponentWillUnmont from './LifeCycleComponents/componentWillUnmont';
import StateHook from './Hooks/StateHook';
import EffectHook from './Hooks/EffectHook';
import ConditionalEffectHook from './Hooks/ConditionalEffectHook';
import SenddatafromChild from './Others/SenddatafromChild'
import ExPureComponent from './Others/ExPureComponent';
import MemoHook from './Hooks/MemoHook';
import RefHook from './Hooks/RefHook';
import ForwardRefHook from './Hooks/ForwardRefHook';
import ControlledComponent from './Others/ControlledComponent';
import UnControlledComponent from './Others/UnControlledComponent';
import HOC from './Others/HOC';

function App() {
  const show = true;
  const purecount =1;
  const [name,setName]=useState("Gourav");
  const [data,setData]=useState(null)
const [print,setPrint]=useState(false)
const [showwillunmount,setShowwillunmount]=useState(true)
const [cfcount,setCFCount]=useState(0);
  const [cfdata,setCFData]=useState(100)

  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="1000";
    inputRef.current.style.color="red"
    inputRef.current.focus()
  }
function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  function callFuncData() {
    alert("Hello from app component")
  }
  function getName(name)
  {
    alert(name)
  }
  return (
   
    <div className="App">
    {/* <h1>Hello World !</h1>
    
    <h1>Functions</h1>
    <User />
    <h1>---------------------</h1>
    <StateEX />
    <h1>Props in React :)</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("Parikh")}} >Update Name</button>
     <h1>---------------------</h1>
     <h1>Get Input Box Value</h1>
     <div className="App">
     {
       print?
       <h1> {data}</h1>
       :null
     }
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    <h1>---------------------</h1>
    <h1>Toggle</h1>
    <Toggle/>
    <h1>---------------------</h1>
    <h1>Handle Form</h1>
    <HandleForm/>
    <h1>---------------------</h1>
    <h1>Conditional Rendering</h1>
    <ConditionalRendering/>
    <h1>---------------------</h1>
    <h1>Basic Form Validation</h1>
    <Login/>
    <h1>---------------------</h1>
    <h1>Pass Function as Props</h1>
    <FuncUser data={callFuncData}/>
    <h1>---------------------</h1>
    <h1>Render Method in React with Constructor</h1>
     <RenderUser />
     <h1>---------------------</h1>
     <ComponentDidMount />
     <h1>---------------------</h1>
     <ComponentDidUpdate/>
     <h1>---------------------</h1>
     <ShouldCMUpdate/>
     <h1>---------------------</h1>
     <h1>Component will Unmount</h1>
     <div className="App">
        {
          showwillunmount?<ComponentWillUnmont />
          :<h4>Component is removed</h4>
        }
        <button onClick={()=>setShowwillunmount(!showwillunmount)}> Toogle Willnmount Component</button>
      </div>
      <h1>---------------------</h1>
      <h1>State Hooks</h1>
      <StateHook/>
      <h1>---------------------</h1>
      <h1>Effect Hook</h1>
      <EffectHook/>
      <h1>---------------------</h1>
      <h1>Conditional Effect Hook</h1>
      <div className="App">
        <ConditionalEffectHook cfcount={cfcount} cfdata={cfdata}/>
        <button onClick={()=>setCFCount(cfcount+1)}> Update Count</button>
        <button onClick={()=>setCFData(cfdata+1)}> Update Data</button>
      </div>
      <h1>---------------------</h1>
    </div> 
    
    <div className="App">
      <h1>Send Data from Child</h1>
      <h1>Lifting State Up</h1>
      <SenddatafromChild getData={getName} />
      <h1>---------------------</h1>
    </div>
    <div className="App">
      <h1>Pure Component</h1>
     <ExPureComponent count={purecount} />
      <button 
      onClick={()=>{this.setState({count:purecount+1})}}
      >Update Count</button>
      <h1>---------------------</h1>
    </div> 
    <div className="App">
      <h1>Memo Hook</h1>
      <MemoHook />
      <h1>---------------------</h1>
    </div>
    <div className="App">
      <h1>Ref Hook</h1>
      <RefHook />
      <h1>---------------------</h1>
    </div> 
    <div className="App">
      <h1>forwardRef in React </h1>
      <ForwardRefHook ref={inputRef} />
      <button onClick={updateInput} >Update Input Box</button>
      <h1>---------------------</h1>
    </div> 
    <div className="App">
      <ControlledComponent />
      <h1>---------------------</h1>
    </div> 
    <div className="App">
      <UnControlledComponent />
      <h1>---------------------</h1>
    </div> */
    <div className="App">
      <HOC />
      <h1>---------------------</h1>
    </div>
    }
   </div>
  );
}


export default App;
