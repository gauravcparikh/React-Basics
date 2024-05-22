import {useState} from 'react';
export function StateEX()
{
    const[data,setdata] = useState('gourav');
    function updatesetdata()
    {
        setdata('parikh');
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={updatesetdata}>click me state</button>
        </div>
        
    )
}

export default StateEX;