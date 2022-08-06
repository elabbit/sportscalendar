import "./Day.css"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react";

import AddEventModal from "../AddEventModal";


const Day = ({ day, events }) => {
    const [dayEvents, setDayEvents] = useState([]);



    useEffect(()=>{
        setDayEvents(events)
    },[events])

    function getDayClass(day) {
        const format = 'DD-MM-YY';
        const toDay = dayjs().format(format);
        const currDay = day?.format(format);
        // const slcDay = daySelected && daySelected.format(format);
        if (toDay === currDay) {
            return "day-current"
        // } else if (currDay === slcDay) {
        //     return "day-selected"
        } else {
            return "";
        }


    }
    return (
        <div className={`day-container ${getDayClass(day)}`} >
            <div className='day-header' >
                <AddEventModal day={day}/>
            </div>
            <div className="day-body">
                        {dayEvents.map((event, i) => (
                            <div key={i}>{event.title}</div>
                        ))}
            </div>




        </div>

    )

}

export default Day;
