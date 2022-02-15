import { useState } from "react";

export const Countdown = ()=>{
    //const [day_, setDay] = useState(2)
    const [hour_, setHour] = useState(48)
    const [minute_, setMinute] = useState("00")
    const [second_, setSecond] = useState("00")


    const workingTimer = ()=>{
        const countDate = new Date("February 16, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        //setDay(()=> Math.floor(gap/day));
        setHour(()=> Math.floor((gap / hour)));
        setMinute(() => Math.floor((gap % hour) / minute));
        setSecond(()=> Math.floor((gap % minute) / second));
    }

    setInterval(workingTimer, 1000)

    return (
        <>  
            <h4 className="center mt-5">Ticket sale ends in: </h4>
            <div className="countdown-timer">
                <div className="hr">
                    <h3>{hour_}</h3>
                    <small>Hr</small>
                </div>
                <p>:</p>
                <div className="min">
                    <h3>{minute_}</h3>
                    <small>Min</small>
                </div>
                <p>:</p>
                <div className="sec">
                    <h3>{second_}</h3>
                    <small>Sec</small>
                </div>
            </div>
        </>
    )
}