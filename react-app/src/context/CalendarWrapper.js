import React,{useState} from "react";
import dayjs from 'dayjs'
import CalendarContext from "./CalendarContext";


const CalendarWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [currentCalendar, setCurrentCalendar] = useState();
    const [currentEvent, setCurrentEvent] = useState();
    const [currentOffset, setCurrentOffset] = useState(new Date().getTimezoneOffset()/60 +1);
    const [showSide, setShowSide] = useState(false)
    const [currCat, setCurrCat] = useState("all")




    return (
        <CalendarContext.Provider value={{monthIndex, setMonthIndex,
        currentCalendar, setCurrentCalendar, currentEvent, setCurrentEvent,
        currentOffset, setCurrentOffset, showSide, setShowSide, currCat, setCurrCat}}>
            {props.children}
        </CalendarContext.Provider>
    )

}

export default CalendarWrapper;
