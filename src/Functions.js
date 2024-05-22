export function User()
{
  let name='gourav parikh';
    function callclick()
  {
    alert(name);
  }
    return(
        <div>
            <button onClick={callclick} >click me</button>
    <button onClick={()=>{alert('arrow click');}} >arroe click me</button>
        </div>
        
    )
}

export default User;