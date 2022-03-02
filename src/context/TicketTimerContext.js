import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({children})=>{
    const [hour_, setHour] = useState(48)
    const [minute_, setMinute] = useState("0")
    const [second_, setSecond] = useState("0")
        

    const workingTimer = ()=>{
        const countDate = new Date("March 2, 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        //const day = hour * 24;
        //setDay(()=> Math.floor(gap/day));
        setHour(()=> Math.floor((gap / hour)));
        setMinute(() => Math.floor((gap % hour) / minute));
        setSecond(()=> Math.floor((gap % minute) / second));
    }

    setInterval(workingTimer, 1000);

    return(
        <TimerContext.Provider value={[hour_, minute_, second_]}>
            {children}
        </TimerContext.Provider>
    )
}