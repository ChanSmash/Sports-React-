import React from "react";
import style from '../styles/market_popup.module.css'

export default function Marketpopup(props:any){
    return(props.trigger) ?(
        <div className={style.popup}>
            <div className={style.popup_inner}>
                <button className={style.close_btn} onClick={()=> props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : null;
    
}