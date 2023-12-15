import React, { useEffect, useState } from "react";
import style from '../../styles/market_popup.module.css';
import Emitter from "../../statickey";


export default function Modalpopup(props:any){

    const [modalInfos, setmodalInfo] = useState<any>('');

    useEffect(()=>{
        setmodalInfo(props.infoData);

        console.log("setmodal info========>", props.infoData)
    })


    const closeModal=(data:any)=>{
        console.log("hiiii");
        Emitter.emit('closeModal',data)
    }




    return(
    <div className={style.popup}>
        <div className={style.popup_inner}>
        <div className="header" style={{ width:'100%', height:'17%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#3a3a3a', borderRadius:'9px 9px 0px 0px', color:'#fff', fontWeight:'bolder'}}>
            <div className="title" style={{ width:'90%', height:'100%',justifyContent:'flex-start', paddingLeft:'30px', display:'flex', alignItems:'center'}}>Info</div>
            <div className="closeButton" onClick={()=>{closeModal(false)}} style={{width:'10%', height:'100%',justifyContent: 'flex-end', paddingRight:'30px', display:'flex', alignItems:'center', }}>X</div>
        </div>
        <div className="bodyContent" style={{ width:'100%', height:'83%', display:'flex', justifyContent:'center', alignItems:'center', color:'#fff',  fontWeight:'600'}}>
            <div>
                {modalInfos}
            </div>

        </div>
        </div>

    </div>
    )
}