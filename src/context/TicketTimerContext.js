import { createContext } from "react";
import { dateValue } from "../api/DateValue";
import { useTimer } from "../customHooks/useTimer";

export const TimerContext = createContext();

//This TimerContext manages the Ticket form, by disabling it onces the 48hrs reaches a negative value.
export const TimerProvider = ({children})=>{
    const [hour, minute, second] = useTimer(dateValue.ticketSaleEnds)

    return(
        <TimerContext.Provider value={[hour, minute, second]}>
            {children}
        </TimerContext.Provider>
    )
}