import React from "react";
import style from '../styles/marketpanel.module.css';
import { sportsList } from "../Datas/gameComponentDatas";
import MarketoutcomeData from "./market_EventList";


export default function MarketPanel(){
    function changeSports(name:any,id:any){
          console.log("sports name::::::",name);
          console.log("sports id::::::",id);
          
    }
    return(
        <div className={style.main_container}>
            i am from Market panel

            <div style={{backgroundColor:'salmon',width:'100%', height:'16%'}}>
                <div className={style.horizontal_cont}>
                    {sportsList.map((el, index)=>{
                return(
                    <div className={style.nameAlign} key={index} onClick={()=>{changeSports(el.name,el.id)}}>
                         <div className="sportsIcon"></div>
                         <div className="sportsName" >{el.name}</div>
                    </div>

                   
                )
            })}
            </div>

            </div>
            <MarketoutcomeData />
        </div>
    )
}