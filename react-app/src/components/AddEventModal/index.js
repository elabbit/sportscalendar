import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddEventForm from './AddEventForm';
import "./AddEventForm.css"

function AddEventModal({ day }) {
  const [showModal, setShowModal] = useState(false);
  const checkDay = (day) => {
    if (!day) return dayjs(new Date())
    return day
  }

const dayButton = (day) =>{
  if (!day) return "Create Event"
  return day.format('DD')
}


  return (
    <>
      <button className='add-event-button' onClick={() => setShowModal(true)}>{dayButton(day)}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddEventForm hideModal={() => setShowModal(false)} day={checkDay(day)} />
        </Modal>
      )}
    </>
  );
}

export default AddEventModal;
