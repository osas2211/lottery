import { useState } from "react";

export const CountdownStating = ()=>{
    const [hour_, setHour] = useState(48)
    const [minute_, setMinute] = useState("0")
    const [second_, setSecond] = useState("0")
        

    const workingTimer = ()=>{
        const countDate = new Date("March 4, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        setHour(()=> Math.floor((gap / hour)));
        setMinute(() => Math.floor((gap % hour) / minute));
        setSecond(()=> Math.floor((gap % minute) / second));
    }

    setInterval(workingTimer, 1000);

    if ( hour_ > 0){
        return (
            <>  
                <h4 className="center mt-5">Ticket sale starts in: </h4>
                <div className="countdown-timer">
                    <div className="hr">
                        <h3>{(hour_ < 10) ? "0" + hour_: hour_}</h3>
                        <small>Hr</small>
                    </div>
                    <p>:</p>
                    <div className="min">
                        <h3>{(minute_< 10) ? "0" + minute_: minute_}</h3>
                        <small>Min</small>
                    </div>
                    <p>:</p>
                    <div className="sec">
                        <h3>{(second_ < 10) ? "0" + second_: second_}</h3>
                        <small>Sec</small>
                    </div> 
                </div>
            </>
        )
    }
    else return <></>
}