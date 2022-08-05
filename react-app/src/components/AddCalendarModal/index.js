import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCalendarForm from './AddCalendarForm';

function AddCalendarModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>New Calendar</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCalendarForm hideModal={()=>setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddCalendarModal;
