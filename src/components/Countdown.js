import { useEffect, useState, useContext } from "react";
import { TimerContext } from "../context/TicketTimerContext";

export const CountdownEnding = ()=>{
    const [hour, minute, second] = useContext(TimerContext);

    return (
        <>  
            <div className="countdown-timer">
                {hour < 0 ? "Ticket Sale has ended" :
                
                <>
                    <div className="hr">
                        <h3>{(hour < 10) ? "0" + hour: hour}</h3>
                        <small>Hr</small>
                    </div>
                    <p>:</p>
                    <div className="min">
                        <h3>{(minute< 10) ? "0" + minute: minute}</h3>
                        <small>Min</small>
                    </div>
                    <p>:</p>
                    <div className="sec">
                        <h3>{(second < 10) ? "0" + second: second}</h3>
                        <small>Sec</small>
                    </div>
                </>}
                
            </div>
        </>
    )
}