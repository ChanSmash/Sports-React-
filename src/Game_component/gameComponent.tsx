import React, { useEffect, useState } from "react";
import style from '../styles/gameComponent.module.css'
import { sportsList } from "../Datas/gameComponentDatas";
import MarketPanel from "../marketPanel_Component/market_panel";
import BetPanel from "../betPanel_Component/bet_panel";
import SportsListPanel from "../sportsList_Component/sports_list_panel";




export default function GameComponent(props:any){






    const enablePreloader=()=>{
       props.showPreloader(true);
    }

    const enablePopup=()=>{
       props.enablePopup(true);
    }


    return(
        <div>
        {/* //     <div>
        //         Iam from gameComponent
        //     </div> */}

            {/* <div className={style.nameAlign}>
            {sportsList.map((el)=>{
                return(
                    <div key={el.id}>{el.name}</div>
                )
            })}

            </div> */}


     
            
<div style={{display:'flex',justifyContent:'center',border:'2px solid red'}}>
    <div style={{display:'flex', width:'20%', height:'100vh', border:'1px solid blue'}}>
        <SportsListPanel/>
    </div>

    <div style={{display:'flex', width:'60%', height:'100vh', border:'1px solid green'}}>
        <MarketPanel/>
    </div>

    <div style={{display:'flex', width:'20%', height:'100vh', border:'1px solid deeppink'}}>
        <BetPanel/>
    </div>





</div>













            {/* <div>
                <button onClick={enablePreloader}>show preloader component</button>
            </div>
            <div>
                <button onClick={enablePopup}>show popup component</button>
            </div> */}

        </div>
    )
}

