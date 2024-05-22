import React from 'react'
class ComponentDidUpdate extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={count:0}
  }
  componentDidUpdate(preProps,preState,snapshot)
  {
    ///This is called all the times whenever we update states
    console.warn("componentDidUpdate",preState.count,this.state.count);
    if(preState.count===this.state.count)
    {
        alert('state already updated');
    }

  }
  render()
  {
    ///this is called on every change in state or property
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Update {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    );
  }
}

export default ComponentDidUpdate;