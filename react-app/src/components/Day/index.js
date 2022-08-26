import "./Day.css"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react";
import AddEventModal from "../AddEventModal";
import CalendarContext from "../../context/CalendarContext";


const Day = ({ day, events }) => {
    const [dayEvents, setDayEvents] = useState([]);
    const { monthIndex, setCurrentEvent, showSide, setShowSide } = useContext(CalendarContext)

    useEffect(() => {
        events.sort((a, b) => {
            if (a.startTime === "None") {
                return -1;
            } else {
                return convertMin(a.startTime) - convertMin(b.startTime)
            }
        })

        setDayEvents(events)
    }, [events])

    function getDayClass(day) {
        const format = 'DD-MM-YY';
        const toDay = dayjs().format(format);
        const currDay = day.format(format);
        if (toDay === currDay) {
            return "day-current"

        } else {
            return "";
        }

    }
    function convertTime(time) {
        if (time === "None") {
            return '';
        }
        const timeArr = time.split(":").splice(0, 2)
        if (timeArr[0] === "00") {
            return `12:${timeArr[1]}am`
        } else if (+timeArr[0] < 10) {
            return `${+timeArr[0]}:${timeArr[1]}am`
        } else if (+timeArr[0] < 12) {
            return timeArr.join(':') + "am"
        } else if (+timeArr[0] === 12) {
            return `12:${timeArr[1]}pm`
        } else
            return `${+timeArr[0] - 12}:${timeArr[1]}pm`
    }

    function convertMin(time) {
        const timeArr = time.split(":").splice(0, 2)
        let hourMin = +timeArr[0] * 60;
        return hourMin + +timeArr[1];

    }
    function dayChecker(day) {
        if (monthIndex < 0 || monthIndex > 11) {
            if (+day.format("MM") !== +dayjs().month(monthIndex).format("MM")) {
                return "day-grey"
            }
        } else {
            if (+day.format("MM") !== monthIndex + 1) {
                return "day-grey"
            }
        }
    }


    function eventClick (event) {
        setCurrentEvent(event)
        if(!showSide) setShowSide(true)
    }

    return (
        <div className={`day-container ${getDayClass(day)}`} >
            <div className={`day-header ${dayChecker(day)}`} >
                <AddEventModal day={day} />
            </div>
            <div className="day-body">
                {dayEvents.sort((a, b) => b.startTime - a.startTime).map((event, i) => (
                    <div className="day-event" key={i} onClick={() => eventClick(event)}
                        style={{ backgroundColor: `${event.color}` }}><span>{convertTime(event.startTime)} {event.title}</span></div>
                ))}
            </div>




        </div>

    )

}

export default Day;
