import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import CalendarContext from '../../context/CalendarContext';
import { Modal } from '../../context/Modal';
import { deleteCalendar } from '../../store/calendars';
import ErrorModal from '../ErrorModal';

function DeleteCalendarModal({ calendarId, calendars }) {
    const { setCurrentCalendar, setCurrentEvent } = useContext(CalendarContext)
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errors, setErrors] = useState([]);

    const onDelete = async () => {
        if (Object.values(calendars).length === 1) {
            setErrors(['Unable to delete last calendar!'])
            setShowModal(false)
            setShowErrorModal(true)
        } else {
            await dispatch(deleteCalendar(calendarId))
            setCurrentCalendar(Object.values(calendars)[0])
            setCurrentEvent('')
            setShowModal(false)
        }
    }

    return (
        <>
            <i className="fas fa-trash-alt" onClick={() => setShowModal(true)}></i>
            <ErrorModal hideModal={() => setShowErrorModal(false)} showModal={showErrorModal} validationErrors={errors} />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="modal-del-container">
                        <div className="modal-header">
                            <h2>Delete Confirmation</h2>
                        </div>
                        <div className='modal-msg-container'>
                            <div>{`Are you sure you want to remove this calendar?`}</div>
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

export default DeleteCalendarModal;
