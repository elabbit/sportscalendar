import { useContext } from "react"
import CalendarContext from "../../context/CalendarContext"
import "./Sidebar.css"
import LogoutButton from "../auth/LogoutButton"
import EventDetails from "../EventDetails"
import FetchSports from "../FetchSportsModal"
import ListCategory from "../ListCategory/index.js"
import AddEventModal from "../AddEventModal"
import ExportModal from "../ExportModal"

const Sidebar = ({ right, setRight, setShowCal, showEditEvent, setShowEditEvent }) => {
    const { setShowSide, setCurrentEvent, setCurrCat, setCurrentCalendar } = useContext(CalendarContext)

    const handleSideCancel = () => {
        setShowSide(false)
        setCurrentEvent('')
        setCurrCat('all')
    }

    const handleAbout = () => {
        setShowCal(false)
        setCurrentCalendar('')
    }

    return (
        <div className="sidebar-outer">
            <div className="sidebar-container">
                <div className="sidebar-cancel-bttn" onClick={handleSideCancel}>
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
                    <i className="fa-solid fa-circle-info" onClick={handleAbout}></i>
                    <LogoutButton />
                </div>
                <div className="sidebar-options">
                    <div className="sidebar-options-top">
                        <AddEventModal day={null} />
                        <FetchSports />
                    </div>
                    <div className="sidebar-options-bottom">
                        <ExportModal />
                    </div>
                </div>
                <div>
                    <EventDetails showEditEvent={showEditEvent} setShowEditEvent={setShowEditEvent} />
                </div>

            </div>
            <ListCategory />
        </div>
    )
}

export default Sidebar;
