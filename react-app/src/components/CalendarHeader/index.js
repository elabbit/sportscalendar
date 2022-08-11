import { useContext, useEffect, useState } from 'react'
import CalendarContext from '../../context/CalendarContext'
import './CalendarHeader.css'
import dayjs from 'dayjs';
import DeleteCalendarModal from '../DeleteCalendarModal';
import AddCalendarModal from '../AddCalendarModal';
import EditCalendarForm from '../EditCalendarForm';


const CalendarHeader = ({ calendars }) => {
    const [showEditForm, setShowEditForm] = useState(false);
    const { monthIndex, setMonthIndex, currentCalendar, setCurrentCalendar, setCurrentEvent } = useContext(CalendarContext)
    const calArr = Object.values(calendars)


    function handleToday() {
        setMonthIndex(dayjs().month());
    }

    function handlePrev() {
        setMonthIndex(monthIndex - 1)
    }

    function handleNext() {
        setMonthIndex(monthIndex + 1)
    }

    function handleDef(def) {
        if (def) return "*"
        return '';
    }

    async function updateCurrent(value) {
        const currCal = calArr.find((cal) => cal.id === +value)
        setCurrentCalendar(currCal)
        setCurrentEvent('')
    }

    return (
            <div className="calendar-header-container">

                <div className="calendar-header-left">
                    <div className="calendar-header-month">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</div>
                    <div className="cal-month-nav">
                        <i className="fa fa-arrow-left-long" onClick={handlePrev}></i>
                        <button onClick={handleToday}>today</button>
                        <i className="fa-solid fa-arrow-right-long" onClick={handleNext}></i>
                    </div>
                </div>
                <div className="calendar-header-center">
                    {!showEditForm ?
                        <>
                            <div className="cal-sel">
                                <select name="calendars-select" id="calendar-select" onChange={(e) => updateCurrent(e.target.value)} value={currentCalendar.id}>
                                    {calArr.map((cal, i) => (
                                        <option key={i} value={cal.id}>{cal.title}{handleDef(cal.default)}</option>
                                    ))
                                    }
                                </select>
                            </div>
                            <div className="cal-des">
                                {currentCalendar.description}
                            </div>
                        </>
                        :
                        <>
                         <button className='cal-edit-cancel' onClick={() => setShowEditForm(false)}></button>
                            <EditCalendarForm calendars={calendars} setShowEditForm={setShowEditForm} calendar={currentCalendar} />
                        </>
                    }
                </div>
                <div className="calendar-header-right">
                    <div className="cal-add-buttons">
                        <AddCalendarModal calendars={calendars} />
                        <i className="fas fa-edit" onClick={() => setShowEditForm(!showEditForm)}></i>
                        <DeleteCalendarModal calendarId={currentCalendar.id} calendars={calendars} />
                    </div>
                </div>
            </div>
    )


}


export default CalendarHeader;
