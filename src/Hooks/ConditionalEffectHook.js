import React, { useEffect, useState } from 'react'
function ConditionalEffectHook(props) {
  
  useEffect(() => {
    alert('count is '+props.cfcount);
  },[props.cfcount,props.cfdata])
  return (
    <div className="App">
      <h1>Count Props {props.cfcount}</h1>
      <h1>Data Props {props.cfdata}</h1>
    </div>
  );
}

export default ConditionalEffectHook;