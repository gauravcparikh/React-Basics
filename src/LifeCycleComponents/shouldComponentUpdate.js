import React from 'react'
class ShouldCMUpdate extends React.Component {
  constructor() {
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate()
  {
    console.warn("shouldComponentUpdate",this.state.count)
   if(this.state.count<5)
   {
     return true;
   }
   else
   return false;

  }

  render() {
    return (
      <div className="App">
        <h1> Should Component Update  {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
      </div>
    );
  }
}

export default ShouldCMUpdate;