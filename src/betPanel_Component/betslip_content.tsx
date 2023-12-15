import EventEmitter from "eventemitter3"
import { useState } from "react";

const Event = new EventEmitter();

export default function BetslipContent(){

    const[data, isData] = useState('chandru');

    const sendValue=()=>{
        console.log("values sented")
        Event.emit('betslipHead', data)
    }




    return(
       <div>
   
        i am from betslip content

        <button onClick={()=>{sendValue()}}>send Emit Value</button>
        </div>

        
    )
}