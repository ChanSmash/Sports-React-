import BethistoryContent from "./betHistory_content";
import BetslipHeader from "./betslip_Header";
import BetslipContent from "./betslip_content";

export default function BetPanel(){
    
    return(
        <div style={{width:'100%'}}>
        <div style={{width: '100%'}}>
           <BetslipHeader/>
        </div>
        <div>
            <BetslipContent/>
        </div>
        <div>
            <BethistoryContent/>
        </div>
        </div>
       
    )
}
