import { useContext, useEffect } from "react"
import DeleteEventModal from "../DeleteEventModal"
import EditEventForm from "../EditEventForm"
import dayjs from "dayjs"
import CalendarContext from "../../context/CalendarContext"
import "./EventDetails.css"

const EventDetails = ({ showEditEvent, setShowEditEvent }) => {
    const { currentEvent, currentOffset } = useContext(CalendarContext)


    useEffect(() => {
        setShowEditEvent(false)
    }, [currentEvent, setShowEditEvent])

    function convertTime(time) {
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
        currentEvent ?
            <>
                {!showEditEvent ?
                    <div className="side-event-container" >
                        <div className="side-event-title" style={{ borderBottom: `3px solid ${currentEvent.color}` }}>{currentEvent.title}</div>
                        {currentEvent.venue &&
                            <div>{currentEvent.venue}</div>}

                        {currentEvent.image &&
                            <img src={currentEvent.image}></img>
                        }
                        <div><i className="fa-solid fa-calendar-day"></i> {dayjs(currentEvent.startDate).add(currentOffset, "hour").format("dddd, MMMM DD")}</div>
                        {currentEvent.startTime !== "None" &&
                            <div><i className="fa-regular fa-clock"></i> {convertTime(currentEvent.startTime)}</div>}

                        {currentEvent.location &&
                            <div><i className="fa-solid fa-location-dot"></i> {currentEvent.location}</div>}
                        {currentEvent.description &&
                            <div>{currentEvent.description}</div>}
                        <div className="side-event-cat-bttns">

                            {currentEvent.category ?
                                <div className="side-event-category">{currentEvent.category}</div>
                                :
                                <div></div>
                            }
                            <div className="side-event-bttns">

                                <i className="fa-solid fa-pen-to-square" onClick={() => setShowEditEvent(true)}></i>
                                <DeleteEventModal event={currentEvent} />
                            </div>
                        </div>
                    </div>
                    :
                    <EditEventForm event={currentEvent} hideForm={() => setShowEditEvent(false)} />
                }
            </>
            :
            null


    )

}


export default EventDetails;
