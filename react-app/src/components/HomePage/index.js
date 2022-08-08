import { useState } from "react";
import Toggle from "react-toggle";
import Calendar from "../Calendar";
import Sidebar from "../Sidebar";
import './HomePage.css'

const HomePage = () => {
    const [showSide, setShowSide] = useState(false);
    return (
        <div className="home-outer">
            <div className='sidebar-controls'>
                <button className="sidebar-button" onClick={() => setShowSide(true)}>Open</button>
                <label>
                <span>Left</span>
                    <Toggle

                        // defaultChecked={this.state.tofuIsReady}
                        icons={false}
                        // onChange={this.handleTofuChange}
                        />
                    <span>Right</span>
                </label>
            </div>

            <div className="sidebar" style={showSide ? { transform: 'translateX(+100%)' } : {}}>
                <Sidebar setShowSide={setShowSide} />
            </div>

            <Calendar showSide={showSide} />
        </div>

    )

}

export default HomePage;
