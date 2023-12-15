import React from "react";


export default function InfoModalComponent(props:any){




    return(
        <div>
            <div className="header">
                <div>Info</div>

                <div onClick={()=>{props.closeInfo(false)}}>X</div>

            </div>
            <div className="body">

            </div>
           
        </div>
    )

}