
import EventEmitter from "eventemitter3"
import { useEffect, useState } from "react";

const Event = new EventEmitter();

export default function BethistoryContent(){
    let onData:any;
    

    const [emeitedData, isemeitedData] = useState('')


    useEffect(()=>{

        console.log("data234567890")

        const valuesData=(eventData:any)=>{
            isemeitedData(eventData)
        }


        const listener = Event.addListener('betslipHead', valuesData);

    


    },[])




    
    return(
       <div>{`   i am from Bethistory Content ${emeitedData}`
        }
     
        </div>
    )
}

