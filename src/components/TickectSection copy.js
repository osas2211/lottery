import ticket_ from "../images/ticket.png";
import TranscHistory from "./TransactionHistory";
import { useState } from "react";

const TicketSection = (props) => {
    const [randomVal, setRandomVal] = useState("Get your #Ticket(s)");
    const [gettingEffect, setGettingEffect] = useState(" ");
    const [ticketBTN, setTicketBTN] = useState(" ");
    const [getTicketVal, setGetTicketVal] = useState("Get Ticket");
    const [ticketImg, setTicketImg] = useState(" ");
    const [mlr, setMlr] = useState("ml_");
    const [numTicket, setNumTicket] = useState(()=> 1);

    const transactions = []
    const [transList, setTransList] = useState(transactions);

    const getTicket = ()=>{
        alert(`${numTicket} ${props.title} ticket(s) for $${numTicket*props.amount}`)
        let counter = 0;
        const val = Math.random(1076).toString().slice(2,10)
        const trans = {id:Math.random(1076).toString().slice(2,10), 
            address:"klcdergxfshdidyugah1627dhdjk",
            ticket_id : val,
            ticket_type : props.title,
        }

        function updater(){
            setRandomVal(Math.random(1076).toString().slice(2,10));
            setGettingEffect("Getting Ticket...");
            setTicketBTN("get-ticket");
            setMlr("")
            counter++
            if (counter === 40){
                clearInterval(refresh)
                setRandomVal(()=>val);
                setTicketImg(ticket_);
                setTicketBTN(" ");
                setGetTicketVal("Get Another Ticket")
                setGettingEffect("")
                setTransList((prevState)=>{
                    return [trans, ...prevState]
                })
            }
        }
        let refresh = setInterval(updater, 50);
    }

    const reduceTicket = ()=>{
        if (numTicket > 1){
            setNumTicket(()=> numTicket - 1)
        }
        else{
            setNumTicket(()=> 1)
        }
    }
    const increaseTicket = ()=>{
        setNumTicket(()=> numTicket + 1)
    }
    return(
        <>
            <div className="ticket container">
                <p className="ticket-type">{props.title} ${props.amount}</p>
                <p className="randomizer"><img src={ticketImg} alt="" className={`ticket-img ${ticketBTN}`}></img> <span className={mlr}>{randomVal}</span></p>

                <p className="ticket-num"><a href="#" onClick={reduceTicket}>-</a> <span className="ticket-count">{numTicket}</span> <a href="#" onClick={increaseTicket}>+</a> </p>
                
                <a href="#" className={"btn "+ ticketBTN} onClick={getTicket}>{getTicketVal}</a>
                <p className="getting">{gettingEffect}</p>
            </div>
            <TranscHistory update={transList}/>
        </>
    )
}
export default TicketSection;