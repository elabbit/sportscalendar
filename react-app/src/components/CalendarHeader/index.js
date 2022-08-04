import { useContext } from 'react'
import CalendarContext from '../../context/CalendarContext'
import './CalendarHeader.css'
import dayjs from 'dayjs';

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(CalendarContext)

    function handleToday () {
        setMonthIndex(dayjs().month());
    }

    function handlePrev () {
        setMonthIndex(monthIndex-1)
    }

    function handleNext () {
        setMonthIndex(monthIndex+1)
    }


    return (
        <div className="calendar-header-container">
            <div>THIS IS A CALENDAR</div>
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
    )


}


export default CalendarHeader;
