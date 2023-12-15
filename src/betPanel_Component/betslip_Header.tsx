import { useState, createContext } from "react";
import BetHistory from "./betHistory";
import BetSlip from "./betslip";
import styles from '../styles/betslip.module.css';


const BetData = createContext(false);

export default function BetslipHeader(){

    const [data, isData] = useState(true)
     
    return(

        <BetData.Provider value={data}>
            <div style={{height: '56px',
            width: '100%',
            display: 'flex'}}>
            <div className={styles.betslip}>
            <BetSlip/>
            </div>
            <div className={styles.betslip}>
            <BetHistory/>
            </div>
            
        </div>

        </BetData.Provider>
    
        
      
    )

}