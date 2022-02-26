import { useState } from "react";
import { OrderSummary } from "./OrderSummary";
import { Countdown } from "./Countdown";
import card_img2 from "../images/SVG Polylogo-02.svg";

const TicketSection = (props) => {
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
        <>
            <div className="ticket-section">
                <div className="ticket-content">
                    <Countdown></Countdown>
                    <div className="ticket container">
                        <p className="ticket-type">{props.title} ${props.amount}</p>
                        <p className="randomizer"><span>Buy {props.title} Ticket(s)</span></p>

                        <form action="" onSubmit={ticketFormHandler}>
                            <input type="number" min={1} placeholder="Number of Tickets" onChange={handleTicketVal} value={ticketVal}/>
                            <a href="" className={"btn"} onClick={getTicket}>Get Ticket</a>
                        </form>
                        
                        {onShow ? <OrderSummary type={props.title} amount={props.amount} num={numTicket} setOnShow={setOnShow}/> : <></>}
                    </div>
                    
                </div>
                <div  className="ticket-img">
                    <img src={card_img2} alt="" />
                </div>
            </div>
            
        </>
    )
}
export default TicketSection;