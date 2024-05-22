import React from 'react'
class ComponentDidMount extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"gourav"}
  }
  componentDidMount()
  {
    ///This is called at once
    console.warn("componentDidMount")

  }
  render()
  {
    ///this is called on every change in state or property
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Parikh"})}>Update</button>
      </div>
    );
  }
}

export default ComponentDidMount;