import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/calendars";
import "./AddEventForm.css"
import CalendarContext from "../../context/CalendarContext";

const AddEventForm = ({ hideModal, day }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('')
    const [startDate, setStartDate] = useState(day.format("YYYY-MM-DD"));
    const [startTime, setStartTime] = useState('');
    const [color, setColor] = useState("#FFFFFF");
    const { currentCalendar, setCurrentCalendar, setCurrentEvent } = useContext(CalendarContext);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newStartTime = undefined;
        if(startTime !== ''){
            newStartTime = startTime;
        }
        const data = await dispatch(addEvent(title, description, location, category, startDate, newStartTime, color, currentCalendar.id));
        if (data) {
            setCurrentCalendar(data.calendar)
            setCurrentEvent(data.event)
            hideModal();
        }
    }

    const handleCancel = async (e) => {
        e.preventDefault();
        hideModal()
    }

    return (
        <div className="add-event-container">
            <form className="add-event-form" onSubmit={handleSubmit}>
                <div className="add-start-div">
                    <div>{day.format("dddd, MMMM DD")}</div>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <input
                    type='text'
                    name='title'
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength="80"
                    required
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
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    maxLength="80"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    maxLength="20"
                />
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button type="submit">Add Event</button>
                <button type="cancel" onClick={handleCancel}>Cancel</button>
            </form>
        </div>

    )
}

export default AddEventForm;
