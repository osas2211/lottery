import { useState } from "react";
import React from "react";
import { createPortal } from "react-dom";
import { TransactionDetails } from "./TransactionDetail";



const TranscHistory = (props)=>{
    const hideTansactions = () => {
        props.setTranscState(false)
    }
    return createPortal(
        <div className="transactions">
            <p><span onClick={hideTansactions}>&times;</span></p>
            <table>
                <thead>
                        <tr>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Game Type</th>
                            <th>Address</th>
                            <th>No. Ticket</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TransactionDetails time="11:00pm WAT" address="0x35648hjhdgshhsghdfshfghf" date="02 Feb 2022" type="Investor" ticket="2"/>
                        <TransactionDetails time="1:00pm WAT" address="0x35648hjhdgshhsghdfshfghf" date="08 Feb 2022" type="Whale" ticket="1"/>
                        <TransactionDetails time="9:00pm WAT" address="0x35648hjhdgshhsghdfshfghf" date="11 Feb 2022" type="Basic" ticket="8"/>
                        <TransactionDetails time="8:00pm WAT" address="0x35648hjhdgshhsghdfshfghf" date="17 Feb 2022" type="Basic" ticket="5"/>
                        <TransactionDetails time="6:00pm WAT" address="0x35648hjhdgshhsghdfshfghf" date="19 Feb 2022" type="investor" ticket="4"/>
                        <TransactionDetails time="6:19am WAT" address="0x35648hjhdgshhsghdfshfghf" date="21 Feb 2022" type="Whale" ticket="1"/>
                        <TransactionDetails time="4:00pm WAT" address="0x35648hjhdgshhsghdfshfghf" date="25 Feb 2022" type="investor" ticket="4"/>
                    </tbody>
            </table>
        </div>, document.querySelector("body")
    )
}

export default TranscHistory;