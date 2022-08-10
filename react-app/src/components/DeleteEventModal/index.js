import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import CalendarContext from '../../context/CalendarContext';
import { Modal } from '../../context/Modal';
import { deleteEvent } from '../../store/calendars';

function DeleteEventModal({ event }) {
    const { setCurrentCalendar, setCurrentEvent } = useContext(CalendarContext)
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
            <i className="fa-solid fa-trash-can" onClick={() => setShowModal(true)}></i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="modal-del-container">
                        <div className="modal-header">
                            <h2>Delete Confirmation</h2>
                        </div>
                        <div className='modal-msg-container'>
                            <div>{`Are you sure you want to remove this event?`}</div>
                        </div>
                        <div className='del-mod-bttns'>
                            <button type='submit' onClick={onDelete}><i className="fa-solid fa-check"></i></button>
                            <button type="cancel" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>





                    </div>
                </Modal>
            )}
        </>
    );
}

export default DeleteEventModal;
