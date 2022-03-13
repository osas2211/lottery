import { useContext, useState } from "react";
import { OrderSummary } from "./OrderSummary";
import { CountdownEnding } from "./CountdownEnding";
import card_img2 from "../images/SVG Polylogo-02.svg";
import { TimerContext } from "../context/TicketTimerContext";
import { CountdownStating } from "./CountdownStarting";

const TicketSection = (props) => {
    const [hour, minute, second] = useContext(TimerContext)
    const [numTicket, setNumTicket] = useState(()=> 1);
    const [onShow, setOnShow] = useState(false);
    const [ticketVal, setTicketVal] = useState(()=> "")

    const getTicket = (e)=>{
        e.preventDefault();
        if (e.target.previousSibling.value > 0){
            // "e.target.previousSibling.value" is the Value from the input element just behind the button.

            setNumTicket(()=>Math.floor(e.target.previousSibling.value))
            setTicketVal(()=>Math.floor(e.target.previousSibling.value))
        }
        else{
            setNumTicket(()=> 0)
        }
        setOnShow(true)
    }

    const ticketFormHandler = (e)=>{
        e.preventDefault();
        setNumTicket(()=> e.target.firstChild.value)
    }
    const handleTicketVal = (e)=> {
        setTicketVal(()=> e.target.value)
    }
    
    return(
        
        <div className="ticket-section">
            <div className="ticket-content">
            <h4 className="center mt-5">{hour < 0 ? "" : "Ticket sale ends in: "}</h4>
                <CountdownEnding></CountdownEnding>
                {hour > 0 || minute > 0 || second > 0 ? <div className="ticket container">
                    <p className="ticket-type">{props.title} ${props.amount}</p>
                    <p className="randomizer"><span>Buy {props.title} Ticket(s)</span></p>

                    <form action="" onSubmit={ticketFormHandler}>
                        <input type="number" min={1} placeholder="Number of Tickets" onChange={handleTicketVal} value={ticketVal}/>
                        <a href="" className={"btn"} onClick={getTicket}>Get Ticket</a>
                    </form>
                    
                    {onShow ? <OrderSummary type={props.title} amount={props.amount} num={numTicket} setOnShow={setOnShow}/> : <></>}
                </div> : <CountdownStating></CountdownStating>}
                
            </div>
            <div  className="ticket-img">
                <img src={card_img2} alt="" />
            </div>
        </div>

    )
}
export default TicketSection;