import React, { useEffect, useState } from "react";
import GameComponent from "../Game_component/gameComponent";
import PreloaderComponent from "../preloader_component/preloaderComponent";
import PopupComponent from "../Popup_component/popup_component";
import InfoModalComponent from "../info_component/infoComponent";
import Modalpopup from "../reusable_Compenet/modal_poupComponent/modal_popup";
import Emitter from "../statickey";


function Appcomponent(){
    const[isGameEnable,setisGameEnable]=useState(false);
    const[isPreloaderEnable,setisPreloaderEnable]=useState(true);
    const[isPopupEnable,setisPopupEnable] = useState(false);
    const[isInfoEnable,setisInfoEnable] = useState(true);
    const[isModalPopup,setisModalPopup] = useState(false);


    //ModalDatasInfo

    const[modalInfo, setModalInfo]= useState<any>()

    const showHideGameComponent=(data:boolean)=>{
        setisGameEnable(!data);
        setisPreloaderEnable(data);
    }

    const showHidepreloaderComponent=(data:boolean)=>{
        setisGameEnable(data);
        setisPreloaderEnable(!data);

    }

    const showPopUpComponent=(data:boolean)=>{
        setisGameEnable(!data);
        setisPopupEnable(data);
    }

    const closeInfo=(data:any)=>{
        setisInfoEnable(data)
    }




    useEffect(()=>{
        Emitter.on('showModalInfo',(modalDetails:any)=>{
            console.log("useef234567890-", modalDetails);
            setisModalPopup(modalDetails.statusInfo);
            setModalInfo(modalDetails.content)
        });


        Emitter.on('closeModal',(status:any)=>{
            console.log("**********Modal close***********")
            setisModalPopup(status)
        })

        
    },[])
    

    return(
        <div style={{border:'1px solid green', width:'100%', height:'100%'}}>
            {isGameEnable ?  <GameComponent showPreloader={showHideGameComponent} enablePopup={showPopUpComponent}/> : ''}

            {isPreloaderEnable?  <PreloaderComponent showGames={showHidepreloaderComponent}/> : ''}

            {isPopupEnable? <PopupComponent disablepopup={showPopUpComponent}/>  : ''}

            {isInfoEnable ?<InfoModalComponent closeInfo={closeInfo} />: ''}

            {isModalPopup ?<Modalpopup infoData={modalInfo} />: ''}



            
           
        </div>
    )
}
export default Appcomponent;