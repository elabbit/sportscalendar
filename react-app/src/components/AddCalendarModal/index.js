import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCalendarForm from './AddCalendarForm';
import "./AddCalendarForm.css"

function AddCalendarModal({calendars}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
<i className="far fa-calendar-plus add-icon" onClick={()=>setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCalendarForm calendars={calendars} hideModal={()=>setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddCalendarModal;
