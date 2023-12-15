import React from "react";
import { outcomeDatas } from "../Datas/outcomeData";
import MarketoutcomeData from "./market_outcomes";
import { alertData } from "../Datas/alertData";
import Marketpopup from "./market_popup";
import PopupComponent from "../Popup_component/popup_component";
import { useState } from "react";
import style from '../styles/market_event.module.css'
import Emitter from "../statickey";




export default function MarketEvent() {
  const [Buttonpopup,setButtonpopup]=useState(false)


  const showInfo =(status:any, info:any)=>{
    let modalDatas={
      "statusInfo":status,
      "content": info

    }

    console.log("moadl========>", modalDatas)
    Emitter.emit('showModalInfo',modalDatas);
  }

  return (
    <div style={{ width: '100%', height: '100vh', border: '2px solid red' }}>
      <div style={{ width: '100%', border: '2px solid blue' }}>
        {outcomeDatas.map((element: any, index) => {
          return (

            <div style={{ width: '100%', height: '20%', border: '2px solid blue' }} key={index}>
               <div className={style.image}> </div>
              <div>
                {element.marketName} {element.closes}
               
              </div>
             
              <button onClick={()=>showInfo(true, element.infoContent)}>info</button>
              <div>
                {element.outComes.map((outcomesEl: any, index: any) => {
                  return (
                    <div key={index}>
                      <MarketoutcomeData datas={outcomesEl} />
                      {/* {outcomesEl.outcomeName} */}
                    </div>
                  )
                })}

              </div>
            </div>

          )
        })}
      </div>
    </div>


  )
}