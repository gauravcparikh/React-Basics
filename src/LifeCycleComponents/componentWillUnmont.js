import React from 'react'
class componentWillUnmont extends React.Component{

    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1>componentWillUnmont Component</h1>
    }
}

export default componentWillUnmont