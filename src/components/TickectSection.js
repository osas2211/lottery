import TranscHistory from "./TransactionHistory";
import { useState } from "react";
import { OrderSummary } from "./OrderSummary";
import { Countdown } from "./Countdown";
import card_img2 from "../images/Bitcoin.svg";

const TicketSection = (props) => {
    const transactions = []
    const [numTicket, setNumTicket] = useState(()=> 1);
    const [transList, setTransList] = useState(transactions);
    const [onShow, setOnShow] = useState(()=>"close");
    const [ticketVal, setTicketVal] = useState(()=> "")

    const toggleModal = (val)=>{
        setOnShow(()=>val)
    }

    const getTicket = (e)=>{
        e.preventDefault();
        if (e.target.previousSibling.value > 0){
            setNumTicket(()=>Math.floor(e.target.previousSibling.value))
            setTicketVal(()=>Math.floor(e.target.previousSibling.value))
        }
        else{
            
            setNumTicket(()=> 0)
        }
        if (onShow == "close"){
            setOnShow(()=>"open")
        }
        else if (onShow == "open"){
            setOnShow(()=>"close")
        }
        if (Number(e.target.previousSibling.value) > 0 ){
            const trans = {id:Math.random(1076).toString().slice(2,10), 
                date: (new Date).toDateString(),
                address:"0x39c5f4439db7f9569918",
                ticket_num : 5,
                ticket_type : props.title,
            }
            setTransList((prevState)=>{
                return [trans, ...prevState]
            })
            setTicketVal(()=> "")
        }
        else{
            setOnShow(()=>"close")
            setTransList(prevState => [...prevState] )
        }
        

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
                            <a href="" className={"btn "} onClick={getTicket}>Get Ticket</a>
                        </form>
                        
                        <OrderSummary type={props.title} amount={props.amount} num={numTicket} hide={onShow} tModal={toggleModal}/>
                        {/* <a href="#ticket-history" className="btn-2">Show Transaction History</a> */}
                    </div>
                    
                </div>
                <div  className="ticket-img">
                    <img src={card_img2} alt="" />
                </div>
            </div>
            
            {/* <TranscHistory id_="ticket-history" update={transList}/> */}
            
        </>
    )
}
export default TicketSection;