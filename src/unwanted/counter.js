import {useState ,useEffect} from 'react';

function Counter(){
 const [ count, setCount]= useState(0);
 const [name, setName ] = useState("Dhamu")


    const inc = ()=>{setCount(count+1)};
    const dec = ()=>{setCount(count-1)};
    const res = ()=>{setCount(0)};

    const nameChange =( {target:{value}} )=>{ setName(value )}

   
    useEffect(()=>{
        console.log("Change in UseEffect");
    },[])

    console.log("Rendering");
    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={inc}>Inc</button>{" "}
        <button onClick={dec}>Dec</button>{" "}
        <button onClick={res}>Reset</button>{" "}<br/><br/>
        <input type="text" value={name} onChange={nameChange}
        />
        </>
    );
}

export default Counter;