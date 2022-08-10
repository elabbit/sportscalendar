import { useContext } from "react"
import CalendarContext from "../../context/CalendarContext"
import "./Sidebar.css"
import LogoutButton from "../auth/LogoutButton"
import { NavLink } from "react-router-dom"
import EventDetails from "../EventDetails"

const Sidebar = ({ right, setRight }) => {
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
                <NavLink to='/' exact={true} activeClassName='active'>
                    <i className="fa-solid fa-house"></i>
                </NavLink>
                <LogoutButton />
            </div>
            <div>
                <EventDetails />
            </div>
        </div>
    )
}

export default Sidebar;
