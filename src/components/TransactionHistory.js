import { useState } from "react";
import React from "react"


import { TransactionDetails } from "./TransactionDetail";
const TranscHistory = (props)=>{
    const [showHist, setShowHist] = useState(()=> "close");
    const [histBtn, setHistBtn] = useState(()=> "View Recent Transactions")
    
    const handleTransHist = (e)=>{
        e.preventDefault();
        if (showHist === "close"){
            setShowHist(()=> "open")
            setHistBtn(()=> "Collapse Recent Transactions")
        }
        else {
            setShowHist(()=> "close")
            setHistBtn(()=> "View Recent Transactions")
        }
    }

    return (
        <React.Fragment>
            <div id={props.id_} className="transaction-history">
                <div className={"mb-5 "+ showHist}>
                    <h2>Your Recent Transactions</h2>
                    <table className="container">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Game Type</th>
                                <th>Address</th>
                                <th>No. Ticket</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.update.map((transaction) =>{
                        return <TransactionDetails key={transaction.id} date={transaction.date} address={transaction.address} ticket={transaction.ticket_num} type={transaction.ticket_type}/>
                    })}
                        </tbody>
                    </table>
                </div>
                <a href="" className="btn-2 mb-5" onClick={handleTransHist}>{histBtn}</a>
            </div>
        </React.Fragment>
    )
}

export default TranscHistory;