import { useState, useContext, useEffect } from 'react';
import CalendarHeader from '../CalendarHeader';
import Month from '../Month';
import Sidebar from '../Sidebar';
import { getMonth } from '../../util'
import CalendarContext from '../../context/CalendarContext';
import './Calendar.css'
import { useDispatch, useSelector } from "react-redux";
import { getCalendars } from '../../store/calendars';



const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, currentCalendar, setCurrentCalendar } = useContext(CalendarContext)
    const dispatch = useDispatch();
    const calendars = useSelector(state => state.calendars)

    useEffect(() => {
        async function fetchCalendars() {
            const data = await dispatch(getCalendars());
            if (data) {
                const calArr = Object.values(data.calendars).sort((a,b)=>a.id-b.id);
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
        currentCalendar ?
            <div className='calendar-container'>
                <CalendarHeader calendars={calendars} />
                <div className="cal-side-container">
                    <Sidebar />
                    <Month month={currentMonth} events={currentCalendar.events} />
                </div>

            </div>
            :
            <h3>Loading...</h3>
    )


}

export default Calendar;
