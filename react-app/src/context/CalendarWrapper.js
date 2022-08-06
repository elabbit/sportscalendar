import React,{useState} from "react";
import dayjs from 'dayjs'
import CalendarContext from "./CalendarContext";


const CalendarWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    // const [daySelected, setDaySelected] = useState(dayjs());
    const [currentCalendar, setCurrentCalendar] = useState();
    return (
        <CalendarContext.Provider value={{monthIndex, setMonthIndex, currentCalendar, setCurrentCalendar}}>
            {props.children}
        </CalendarContext.Provider>
    )

}

export default CalendarWrapper;
