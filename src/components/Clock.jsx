import React,{useState} from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toString());
    
        function showTime() {
             console.log("Inside the function time");   
             setTime(new Date().toString())
             
        }
 
        setInterval(showTime,1000);

    return <div>{time}</div>
}

export default Clock