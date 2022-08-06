import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddEventForm from './AddEventForm';
import "./AddEventForm.css"

function AddEventModal({day}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='add-event-button' onClick={() => setShowModal(true)}>{day.format('DD')}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddEventForm hideModal={()=>setShowModal(false)} day={day}/>
        </Modal>
      )}
    </>
  );
}

export default AddEventModal;
