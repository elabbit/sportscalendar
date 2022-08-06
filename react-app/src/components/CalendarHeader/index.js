import { useContext, useEffect, useState } from 'react'
import CalendarContext from '../../context/CalendarContext'
import './CalendarHeader.css'
import dayjs from 'dayjs';
import DeleteCalendarModal from '../DeleteCalendarModal';
import AddCalendarModal from '../AddCalendarModal';
import EditCalendarForm from '../EditCalendarForm';


const CalendarHeader = ({ calendars }) => {
    const { monthIndex, setMonthIndex, currentCalendar, setCurrentCalendar } = useContext(CalendarContext)
    const calArr = Object.values(calendars)
    const [showEditForm, setShowEditForm] = useState(false);

    function handleToday() {
        setMonthIndex(dayjs().month());
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
            <div className="calendar-header-left">
                <div className="calendar-header-month">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</div>
                <div className="cal-add-select">
                    <AddCalendarModal calendars={calendars} />
                    <select name="calendars-select" id="calendar-select" onChange={(e) => updateCurrent(e.target.value)} value={currentCalendar.id}>
                        {calArr.map((cal, i) => (
                            <option key={i} value={cal.id}>{cal.title}</option>
                        ))
                        }
                    </select>
                </div>


            </div>
            <div className="calendar-header-center">
                {!showEditForm ?
                    <>
                        <div>
                            <div>{currentCalendar.description}</div>
                        </div>
                        <div className="cal-edit-del-buttons">
                        <i class="fas fa-edit" onClick={()=>setShowEditForm(true)}></i>
                        <DeleteCalendarModal calendarId={currentCalendar.id} calendars={calendars} />
                        </div>

                    </>
                    :
                    <EditCalendarForm hideForm={()=>setShowEditForm(false)} calendar={currentCalendar}/>
                }
            </div>
            <div className="calendar-header-right">
                <i class="fas fa-arrow-left" onClick={handlePrev}></i>
                <button onClick={handleToday}>
                    Today
                </button>
                <i class="fas fa-arrow-right" onClick={handleNext}></i>
            </div>
        </div>
    )


}


export default CalendarHeader;
