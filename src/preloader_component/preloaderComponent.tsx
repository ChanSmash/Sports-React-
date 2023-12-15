import React from "react";
import style from '../styles/preloader_component.module.css';
import EventEmitter from "eventemitter3";
import StaticKey from "../statickey";

const Event = new EventEmitter();
//component 1
export default function PreloaderComponent(props:any){

    const enableGame=()=>{
        props.showGames(true);
        emitData()
    }
    

    function emitData(){
        Event.emit('emittingData',true)
    }

    return(
        <div className={style.parentDiv}>

            Iam from preloader
            <div>
                <button onClick={enableGame}>show gameComponent component</button>
            </div>

            <div className={style.loader}>

            </div>
        </div>
       
    )
}

