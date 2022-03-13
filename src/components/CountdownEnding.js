import { useContext } from "react";
import { TimerContext } from "../context/TicketTimerContext";
import { Time } from "./Time";

export const CountdownEnding = ()=>{
    const [hour, minute, second] = useContext(TimerContext);

    return (
        <>  
            <div className="countdown-timer">
                {hour < 0 ? "Ticket Sale has ended" :
                    <Time hour={hour} minute={minute} second={second} />
                }
                
            </div>
        </>
    )
}