import React,{useState} from "react";
import dayjs from 'dayjs'
import CalendarContext from "./CalendarContext";




const CalendarWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [daySelected, setDaySelected] = useState(dayjs());
    return (
        <CalendarContext.Provider value={{monthIndex, setMonthIndex, daySelected, setDaySelected}}>
            {props.children}
        </CalendarContext.Provider>
    )

}

export default CalendarWrapper;
