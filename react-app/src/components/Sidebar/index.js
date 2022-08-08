import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import CalendarContext from "../../context/CalendarContext"
import DeleteEventModal from "../DeleteEventModal"
import EditEventForm from "../EditEventForm"
import NavBar from "../NavBar"
import Options from "../Options"
import "./Sidebar.css"
import Toggle from "react-toggle";

const Sidebar = ({ setShowSide, right, setRight}) => {
    const { currentEvent, setCurrentEvent, currentOffset } = useContext(CalendarContext)
    const [showEdit, setShowEdit] = useState(false)


    useEffect(() => {
        setShowEdit(false)
    }, [currentEvent])

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
        <div className="sidebar-container">


            <div className="sidebar-toggle-cancel-bttns">
                <label className="toggle-sidebar">
                    <Toggle
                        className='toggle-switch'
                        icons={{
                            checked: <i className="fa-solid fa-r"></i>,
                            unchecked: <i className="fa-solid fa-l"></i>,
                        }}
                        checked={right}
                        onChange={() => setRight(!right)}
                    />
                </label>
                <button className="arrow-button" onClick={() => setShowSide(false)}>
                    {right ?
                        <i class="fa-solid fa-angles-right"></i>
                        :
                        <i class="fa-solid fa-angles-left"></i>
                    }
                </button>
            </div>
            <div className="sidebar-header">

            </div>
            <NavBar />
            <Options />
            {currentEvent ?
                <>
                    {!showEdit ?
                        <div className="side-event-container">
                            <button onClick={() => setShowEdit(true)}>Edit</button>
                            <DeleteEventModal event={currentEvent} />
                            <div>{dayjs(currentEvent.startDate).add(currentOffset, "hour").format("dddd MMMM DD")}</div>
                            {currentEvent.startTime != "None" &&
                                <div>{convertTime(currentEvent.startTime)}</div>}
                            <div>Title: {currentEvent.title}</div>
                            {currentEvent.location &&
                                <div>Location: {currentEvent.location}</div>}
                            {currentEvent.description &&
                                <div>Description: {currentEvent.description}</div>}
                            {currentEvent.category &&
                                <div>Category: {currentEvent.category}</div>}
                        </div>
                        :
                        <EditEventForm event={currentEvent} hideForm={() => setShowEdit(false)} />
                    }
                </>
                :
                null}
        </div>
    )
}

export default Sidebar;
