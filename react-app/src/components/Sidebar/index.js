import dayjs from "dayjs"
import { useContext } from "react"
import CalendarContext from "../../context/CalendarContext"
import "./Sidebar.css"

const Sidebar = () => {
    const { currentEvent, setCurrentEvent, currentOffset } = useContext(CalendarContext)

    function convertTime (time) {

        const timeArr = time.split(":").splice(0,2)
        if(timeArr[0] === "00"){
            return `12:${timeArr[1]} AM`
        }else if(+timeArr[0]<10){
            return `${+timeArr[0]}:${timeArr[1]} AM`
        }else if(+timeArr[0] < 12){
            return timeArr.join(':') + " AM"
        }else if(+timeArr[0] === 12){
            return `12:${timeArr[1]} PM`
        }else
        return `${+timeArr[0]-12}:${timeArr[1]} PM`
    }


    return (
        <div className="sidebar-outer">
            {currentEvent ?
                <div className="side-event-container">
                    <div>{dayjs(currentEvent.startDate).add(currentOffset, "hour").format("dddd MMMM DD")}</div>
                    <div>{currentEvent.startTime != "None" && convertTime(currentEvent.startTime)}</div>
                </div>
                :
                null}








        </div>
    )

}

export default Sidebar;
