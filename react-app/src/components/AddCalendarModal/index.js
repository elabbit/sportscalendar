import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCalendarForm from './AddCalendarForm';
import "./AddCalendarForm.css"

function AddCalendarModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
<i class="far fa-calendar-plus add-icon" onClick={()=>setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCalendarForm hideModal={()=>setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddCalendarModal;
