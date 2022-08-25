import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editEvent } from "../../store/calendars";
import "./EditEventForm.css"
import CalendarContext from "../../context/CalendarContext";
import dayjs from "dayjs";
import ErrorModal from '../ErrorModal';

const EditEventForm = ({ hideForm, event }) => {
    const { setCurrentCalendar, setCurrentEvent, currentOffset } = useContext(CalendarContext);
    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
    const [location, setLocation] = useState(event.location);
    const [category, setCategory] = useState(event.category)
    const [startDate, setStartDate] = useState(dayjs(event.startDate).add(currentOffset, "hour").format("YYYY-MM-DD"));
    const [startTime, setStartTime] = useState(event.startTime === "None" ? '' : event.startTime);
    const [color, setColor] = useState(event.color);
    const [errors, setErrors] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim().length) {
            setErrors([`Please enter a title.`])
            setShowErrorModal(true)
            return
        }

        let newStartTime = undefined;
        if (startTime !== '' && startTime !== "None") {
            let editStartTime = startTime;
            newStartTime = String(editStartTime).split(":").splice(0, 2).join(":")
        }
        const data = await dispatch(editEvent(title, description, location, category, startDate, newStartTime, color, event.id));
        if (data) {
            setCurrentCalendar(data.calendar)
            setCurrentEvent(data.event)
            hideForm();
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        hideForm();
    }

    return (
        <div className="edit-event-container">
            <ErrorModal hideModal={() => setShowErrorModal(false)} showModal={showErrorModal} validationErrors={errors} />
            <form className="edit-event-form" onSubmit={handleSubmit}>
                <div className="edit-event-header" style={{ borderBottom: `3px solid ${color}` }}>Edit Event</div>
                <input
                    type='text'
                    name='title'
                    placeholder="Title (required)"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength="80"
                    required
                />

                <input
                    type='date'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    maxLength="80"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength="400"
                >
                </textarea>

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    maxLength="20"
                />
                <div className="edit-eve-color-bttns">

                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        list="presetColors"
                    />
                    <datalist id="presetColors">
                        <option>#FFADAD</option>
                        <option>#FFD6A5</option>
                        <option>#FDFFB6</option>
                        <option>#CAFFBF</option>
                        <option>#98F5E1</option>
                        <option>#9BF6FF</option>
                        <option>#A0C4FF</option>
                        <option>#BDB2FF</option>
                        <option>#FFC6FF</option>
                        <option>#adc9cd</option>

                    </datalist>
                    <div className="edit-eve-bttns">

                        <button type="submit"><i className="fa-solid fa-check"></i></button>
                        <button type="cancel" onClick={handleCancel}><i className="fa-solid fa-xmark"></i></button>
                    </div>

                </div>
            </form>
        </div>

    )
}

export default EditEventForm;
