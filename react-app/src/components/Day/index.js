import "./Day.css"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react";
import CalendarContext from "../../context/CalendarContext";



const Day = ({ day, events }) => {
    const [dayEvents, setDayEvents] = useState([]);
    const { daySelected, setDaySelected } = useContext(CalendarContext)
    useEffect(()=>{
        setDayEvents(events)
    },[events])

    function getDayClass(day) {
        const format = 'DD-MM-YY';
        const toDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (toDay === currDay) {
            return "day-current"
        } else if (currDay === slcDay) {
            return "day-selected"
        } else {
            return "";
        }


    }
    return (
        <div className="day-container" >
            <div className='day-header'>
                <span className={`day-number ${getDayClass(day)}`} onClick={() => setDaySelected(day)}>{day.format('DD')}</span>
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
