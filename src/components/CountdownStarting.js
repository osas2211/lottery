import { useTimer } from "../customHooks/useTimer"
import { Time } from "./Time"
import { dateValue } from "../api/DateValue";


// This component is rendered once the ticket window is closed(48hrs window); 
export const CountdownStating = ()=>{
    const [hour, minute, second] = useTimer(dateValue.ticketSaleStarts);

    if ( hour > 0 && minute > 0 && second > 0){
        return (
            <>  
                <h4 className="center mt-5">Ticket sale starts in: </h4>
                <div className="countdown-timer">
                    <Time  hour={hour} minute={minute} second={second}/>
                </div>
            </>
        )
    }
    else return <></>
}