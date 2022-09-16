import { useContext } from 'react';
import { useSelector } from 'react-redux'
import CalendarContext from '../../context/CalendarContext';
import dayjs from 'dayjs';
import "./ExportForm.css"
const ics = require('ics')
var FileSaver = require('file-saver');



const ExportForm = ({ hideModal }) => {
    const calendars = useSelector(state => state.calendars)
    const { currentOffset, currentCalendar, setCurrentCalendar } = useContext(CalendarContext)

    const parseStart = (startDate, startTime) => {

        const start = dayjs(startDate).add(currentOffset, 'hour').format("YYYY M D").split(' ').map((ele) => parseInt(ele))

        if(startTime !== "None"){
            const timeArr = startTime.split(':');
            start.push(parseInt(timeArr[0]))
            start.push(parseInt(timeArr[1]))
        }
         return start;
    }

    const handleExport = () => {

        const { error, value } = ics.createEvents(
            currentCalendar.events.map((eve) => {

                return {
                    title: eve.title,
                    start: parseStart(eve.startDate, eve.startTime)
                }
            })
        )

        if (error) {
            console.log(error)
            return
        }

        var blob = new Blob([value], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, `${currentCalendar.title}.ics`);
        hideModal();
    }

    const handleClose = () => {
        hideModal()
    }
    async function updateCurrent(value) {
        const currCal = Object.values(calendars).find((cal) => cal.id === +value)
        setCurrentCalendar(currCal)
    }
    return (
        <div className="add-cal-container">
            <div className="add-cal-mod-header">Export Calendar</div>
            <select className="export-select" onChange={(e) => updateCurrent(e.target.value)} value={currentCalendar.id}>
                {Object.values(calendars).map((cal) => (
                    <option key={cal.id} value={cal.id}>{cal.title}</option>
                ))
                }
            </select>
            <div className="export-buttons">
            <button onClick={handleExport}>Export (.ics)</button>
            <button onClick={handleClose}>Back</button>
            </div>
        </div>
    );
};

export default ExportForm;
