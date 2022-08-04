import "./Day.css"
import dayjs from "dayjs"
import { useContext } from "react";
import CalendarContext from "../../context/CalendarContext";

const Day = ({ day }) => {

    const { daySelected, setDaySelected } = useContext(CalendarContext)

    function getDayClass(day) {
        const format = 'DD-MM-YY';
        const toDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (toDay === currDay) {
            return "day-current"
        } else if (currDay === slcDay) {
            return "day-selected"
        } else {
            return "";
        }


    }
    return (
        <div className="day-container" onClick={()=>setDaySelected(day)}>
            <div className='day-header'>
                <span className={`day-number ${getDayClass(day)}`}>{day.format('DD')}</span>
            </div>

<div className="day-body">

</div>




        </div>

    )

}

export default Day;
