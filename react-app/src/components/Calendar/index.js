import { useState, useContext, useEffect } from 'react';
import CalendarHeader from '../CalendarHeader';
import Month from '../Month';
import Sidebar from '../Sidebar';
import { getMonth } from '../../util'
import CalendarContext from '../../context/CalendarContext';
import './Calendar.css'
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from '../../store/events';



const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useContext(CalendarContext)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events)


    useEffect(()=>{
        dispatch(getEvents(1));
    }, [dispatch])


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])


    return (
        <div className='calendar-container'>
            <Sidebar />
            <div className="cal-head-container">
                <CalendarHeader />
                <Month month={currentMonth} events={events}/>
            </div>

        </div>

    )


}


export default Calendar;
