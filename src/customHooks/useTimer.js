import { useEffect, useState } from "react";

export const useTimer = (date)=>{
    const [hour, setHour] = useState(48)
    const [minute, setMinute] = useState("0")
    const [second, setSecond] = useState("0")
        

    const workingTimer = ()=>{
        const countDate = new Date(date).getTime();
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

    useEffect(()=> {
        setInterval(workingTimer, 1000);
    }, [])

    return [hour, minute, second]
}