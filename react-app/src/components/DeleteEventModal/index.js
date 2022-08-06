import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import CalendarContext from '../../context/CalendarContext';
import { Modal } from '../../context/Modal';
import { deleteEvent } from '../../store/calendars';

function DeleteEventModal({ event }) {
    const {setCurrentCalendar, setCurrentEvent} = useContext(CalendarContext)
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const onDelete = async () => {
        const data = await dispatch(deleteEvent(event.id))
        if (data) {
            setCurrentCalendar(data.calendar)
            setCurrentEvent()
            setShowModal(false)
        }
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>Delete Confirmation</h2>
                        </div>
                        <div className='modal-msg-container'>
                            <div>{`Are you sure you want to remove this event?`}</div>
                        </div>
                        <div className="modal-btn-container dlt-bttn">
                            <button onClick={onDelete}>Delete</button>
                        </div>
                        <div className="modal-btn-container cnl-bttn">
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default DeleteEventModal;
