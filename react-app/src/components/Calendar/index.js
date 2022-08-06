import { useState, useContext, useEffect } from 'react';
import CalendarHeader from '../CalendarHeader';
import Month from '../Month';
import Sidebar from '../Sidebar';
import { getMonth } from '../../util'
import CalendarContext from '../../context/CalendarContext';
import './Calendar.css'
import { useDispatch, useSelector } from "react-redux";
import { getCalendars } from '../../store/calendars';
import Options from '../Options';


const Calendar = () => {
    const [toggleSide, setToggleSide] = useState(true);
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, currentCalendar, setCurrentCalendar } = useContext(CalendarContext)
    const dispatch = useDispatch();
    const calendars = useSelector(state => state.calendars)

    useEffect(() => {
        async function fetchCalendars() {
            const data = await dispatch(getCalendars());
            if (data) {
                const calArr = Object.values(data.calendars).sort((a, b) => a.id - b.id);
                const currCal = calArr.find((cal) => cal.default === true) || calArr[0];
                setCurrentCalendar(currCal)
            }
        }
        fetchCalendars();
    }, [dispatch])


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])


    return (
        <div className="calendar-outer">
        {currentCalendar ?
            <div className={`calendar-container ${toggleSide ? "left" : "right"}`}>
                <div className='side-container'>
                    <Options toggleSide={toggleSide} setToggleSide={setToggleSide}/>
                    <Sidebar />
                </div>
                <div className="cal-container">
                    <CalendarHeader calendars={calendars} />
                    <Month month={currentMonth} events={currentCalendar.events} />
                </div>

            </div>
            :
            <h3>Loading...</h3>}
        </div>
    )


}

export default Calendar;
