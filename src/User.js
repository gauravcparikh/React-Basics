function FuncUser(props) {
    
    return(
        <div>
            <h1>Func User Child Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}


export default FuncUser;