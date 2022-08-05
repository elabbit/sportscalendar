import { useContext, useEffect, useState } from 'react'
import CalendarContext from '../../context/CalendarContext'
import './CalendarHeader.css'
import dayjs from 'dayjs';
import EditCalendarModal from '../EditCalendarModal';
import DeleteCalendarModal from '../DeleteCalendarModal';

const CalendarHeader = ({ calendars }) => {

    const { monthIndex, setMonthIndex, currentCalendar, setCurrentCalendar, setDaySelected } = useContext(CalendarContext)
    const calArr = Object.values(calendars)

    function handleToday() {
        setMonthIndex(dayjs().month());
        setDaySelected(dayjs())
    }

    function handlePrev() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNext() {
        setMonthIndex(monthIndex + 1)
    }

    async function updateCurrent(value) {
        const currCal = calArr.find((cal) => cal.id === +value)
        setCurrentCalendar(currCal)
    }

    return (
        <div className="calendar-header-container">
            <div className="calendar-header-top">
                <div>
                    <select name="calendars-select" id="calendar-select" onChange={(e) => updateCurrent(e.target.value)} value={currentCalendar.id}>
                        {calArr.map((cal, i) => (
                            <option key={i} value={cal.id}>{cal.title}</option>
                        ))
                        }
                    </select>
                </div>
                <div>
                    <div>Description: <span>{currentCalendar.description}</span></div>
                </div>
                <EditCalendarModal calendar={currentCalendar} />
                <DeleteCalendarModal calendarId={currentCalendar.id} calendars={calendars}/>
            </div>
            <div className="calendar-header-bottom">
                <button onClick={handleToday}>
                    Today
                </button>
                <button onClick={handlePrev}>
                    Previous Month
                </button>
                <button onClick={handleNext}>
                    Next Month
                </button>
                <div>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</div>
            </div>
        </div>
    )


}


export default CalendarHeader;
