import "./Day.css"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react";
import AddEventModal from "../AddEventModal";
import CalendarContext from "../../context/CalendarContext";


const Day = ({ day, events }) => {
    const [dayEvents, setDayEvents] = useState([]);
    const { currentEvent, setCurrentEvent } = useContext(CalendarContext)

    useEffect(() => {
        setDayEvents(events)
    }, [events])

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
    function convertTime(time) {
        if(time=== "None"){
            return '';
        }

        const timeArr = time.split(":").splice(0, 2)
        if (timeArr[0] === "00") {
            return `12:${timeArr[1]} AM`
        } else if (+timeArr[0] < 10) {
            return `${+timeArr[0]}:${timeArr[1]} AM`
        } else if (+timeArr[0] < 12) {
            return timeArr.join(':') + " AM"
        } else if (+timeArr[0] === 12) {
            return `12:${timeArr[1]} PM`
        } else
            return `${+timeArr[0] - 12}:${timeArr[1]} PM`
    }





    return (
        <div className={`day-container ${getDayClass(day)}`} >
            <div className='day-header' >
                <AddEventModal day={day} />
            </div>
            <div className="day-body">
                {dayEvents.sort((a,b)=>b.startTime-a.startTime).map((event, i) => (
                    <div className="day-event" key={i} onClick={() => setCurrentEvent(event)}
                        style={{ backgroundColor: `${event.color}` }}>{convertTime(event.startTime)} {event.title}</div>
                ))}
            </div>




        </div>

    )

}

export default Day;
