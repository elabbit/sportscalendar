import { useContext, useState } from "react";
import CalendarContext from "../../context/CalendarContext";
import Calendar from "../Calendar";
import Sidebar from "../Sidebar";
import './HomePage.css'


const HomePage = () => {
    const { showSide, setShowSide } = useContext(CalendarContext)
    const [right, setRight] = useState(false);

    return (
        <div className="home-outer">
            <div className={`${right ? 'sidebar-controls-right' : 'sidebar-controls-left'}`}>
                <button className='sidebar-button' onClick={() => setShowSide(true)}><i className="fa-solid fa-bars"></i></button>


            </div>
            <div className={`${right ? 'sidebar-right' : 'sidebar-left'}`}
                style={right ? (showSide ? { transform: 'translateX(-100%)' } : {}) : (showSide ? { transform: 'translateX(+100%)' } : {})}>
                <Sidebar right={right} setRight={setRight}/>
            </div>
            <div className={`${right ? 'content-outer-right' : 'content-outer-left'} ${showSide ? 'open' : 'close'}`}>
                {showSide &&
                    <div className='spacer'></div>
                }
                <div className={`${right ? 'content-container-right' : 'content-container-left'}`}>
                    <Calendar />
                </div>
            </div>
        </div>

    )

}

export default HomePage;
