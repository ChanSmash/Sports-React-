import React, { useEffect, useState } from "react"; 

export default function MarketoutcomeData(props:any){
    // console.log("props datas------>", props.datas)

    const outcomeValues=(outcomeName:any, outcomeOdds:any)=>{
        console.log("outcomename and values---------->", outcomeName, outcomeOdds)
    }

    // useEffect(()=>{
        
    // },[])


    return(
        <div>
            <div onClick={()=>{outcomeValues(props.datas.outcomeName,props.datas.outcomeOdds)}}   style={{color:'#fff',backgroundColor:'#373737',margin:'5px 10px',borderRadius:'3px'}}>
                {props.datas.outcomeName} {props.datas.outcomeOdds}
            </div>
            {/* {outcomeData.map((el:any)=>{
                return(
                    <div>
                        {el.outcomeName}

                    </div>

                )
            })} */}
           
          
        </div>
    )
}