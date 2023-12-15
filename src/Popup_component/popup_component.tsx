import React from "react";

export default function PopupComponent(props:any){
    const disablePopup =()=>{
      props.disablepopup(false)
    }

    return(
        <div style={styles.parentDiv} >
            i am from popup component, currently loading
            <div>
            <button onClick={disablePopup}>back to gameComponent</button>
            </div>
           
        </div>
    )
}


const styles = {
    parentDiv : {
        background: 'rgba(200, 54, 54, 0.5)',
        width : '100%',
        height : '100%',
    }
}

