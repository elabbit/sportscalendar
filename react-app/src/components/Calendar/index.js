import { useState, useContext, useEffect } from 'react';
import CalendarHeader from '../CalendarHeader';
import Month from '../Month';
import Sidebar from '../Sidebar';
import { getMonth } from '../../util'
import CalendarContext from '../../context/CalendarContext';
import './Calendar.css'


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useContext(CalendarContext)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])


    return (
        <div className='calendar-container'>
            <Sidebar />
            <div className="cal-head-container">
                <CalendarHeader />
                <Month month={currentMonth} />
            </div>

        </div>

    )


}


export default Calendar;
