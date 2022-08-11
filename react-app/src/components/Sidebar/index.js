import { useContext } from "react"
import CalendarContext from "../../context/CalendarContext"
import "./Sidebar.css"
import LogoutButton from "../auth/LogoutButton"
import EventDetails from "../EventDetails"
import FetchSports from "../FetchSports"

const Sidebar = ({ right, setRight, setShowCal }) => {
    const { setShowSide } = useContext(CalendarContext)

    return (
        <div className="sidebar-container">
            <div className="sidebar-cancel-bttn" onClick={() => setShowSide(false)}>
                <button className="arrow-button" >
                    {right ?
                        <i className="fa-solid fa-angles-right"></i>
                        :
                        <i className="fa-solid fa-angles-left"></i>
                    }
                </button>
            </div>
            <div className="sidebar-navbar">
                <i className="fa-solid fa-right-left" onClick={() => setRight(!right)}></i>
                <i className="fa-solid fa-house" onClick={() => setShowCal(true)}></i>
                <i className="fa-solid fa-circle-info" onClick={() => setShowCal(false)}></i>
                <LogoutButton />
            </div>
            {/* <div>
                <FetchSports/>
            </div> */}
            <div>
                <EventDetails />
            </div>
        </div>
    )
}

export default Sidebar;
