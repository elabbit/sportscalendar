import React from "react";
import Day from "../Day";
import "./Month.css"

const Month = ({ month }) => {

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
                                <Day day={day} key={index} />
                            ))
                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    )

}


export default Month;
