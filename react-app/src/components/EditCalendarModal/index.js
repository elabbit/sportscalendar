import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCalendarForm from './EditCalendarForm';

function EditCalendarModal({calendar}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCalendarForm hideModal={()=>setShowModal(false)} calendar={calendar}/>
        </Modal>
      )}
    </>
  );
}

export default EditCalendarModal;
