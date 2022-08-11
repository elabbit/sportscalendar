import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import CalendarContext from "../../context/CalendarContext";
import About from "../About";
import Calendar from "../Calendar";
import Sidebar from "../Sidebar";
import SplashPage from "../SplashPage";
import './HomePage.css'


const HomePage = () => {
    const { showSide, setShowSide } = useContext(CalendarContext)
    const [right, setRight] = useState(false);
    const user = useSelector(state => state.session.user);
    const [showCal, setShowCal] = useState(true);
    const [showEditEvent, setShowEditEvent] = useState(false)

    return (
        user ?
            < div className="home-outer" >
            {showEditEvent && <button className='event-edit-cancel' onClick={()=>setShowEditEvent(false)}></button>}
                <div className={`${right ? 'sidebar-controls-right' : 'sidebar-controls-left'}`}>
                    <button className='sidebar-button' onClick={() => setShowSide(true)}><i className="fa-solid fa-bars"></i></button>
                </div>
                <div className={`${right ? 'sidebar-right' : 'sidebar-left'}`}
                    style={right ? (showSide ? { transform: 'translateX(-100%)' } : {}) : (showSide ? { transform: 'translateX(+100%)' } : {})}>
                    <Sidebar right={right} setRight={setRight} setShowCal={setShowCal} showEditEvent={showEditEvent} setShowEditEvent={setShowEditEvent}/>
                </div>
                <div className={`${right ? 'content-outer-right' : 'content-outer-left'} ${showSide ? 'open' : 'close'}`}>
                    {showSide &&
                        <div className='spacer'></div>
                    }
                    <div className={`${right ? 'content-container-right' : 'content-container-left'}`}>
                        {showCal?
                            <Calendar />
                            :
                            <About />
                        }
                    </div>
                </div>
            </div >
            :
            <SplashPage />
    )

}

export default HomePage;
