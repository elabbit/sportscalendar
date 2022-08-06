import dayjs from "dayjs";
import React, { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";
import Day from "../Day";
import "./Month.css"

const Month = ({ month, events }) => {
    const { currentOffset } = useContext(CalendarContext)

const eventsProp = (events, day) => {
    return Object.values(events).filter((event)=>(dayjs(event.startDate).add(currentOffset,'hour').format("DD-MM-YY") === day.format("DD-MM-YY")));
}

    return (
        <div className="month-outer">
            <div className="month-weekdays">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
            </div>
            <div className="month-container">
                {month.map((row, i) => (
                    <React.Fragment key={i}>
                        {
                            row.map((day, index) => (
                                <Day day={day} key={index} events={eventsProp(events, day)}/>
                            ))
                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    )

}


export default Month;