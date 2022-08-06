import "./Day.css"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react";
import AddEventModal from "../AddEventModal";
import CalendarContext from "../../context/CalendarContext";


const Day = ({ day, events }) => {
    const [dayEvents, setDayEvents] = useState([]);
    const {currentEvent, setCurrentEvent} = useContext(CalendarContext)

    useEffect(()=>{
        setDayEvents(events)
    },[events])

    function getDayClass(day) {
        const format = 'DD-MM-YY';
        const toDay = dayjs().format(format);
        const currDay = day?.format(format);
        if (toDay === currDay) {
            return "day-current"

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
                            <div className="day-event" key={i} onClick={()=>setCurrentEvent(event)}
                            style={{backgroundColor:`${event.color}`}}>{event.title}</div>
                        ))}
            </div>




        </div>

    )

}

export default Day;
