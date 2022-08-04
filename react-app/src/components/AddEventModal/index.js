import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddEventForm from './AddEventForm';

function AddEventModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Event</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddEventForm />
        </Modal>
      )}
    </>
  );
}

export default AddEventModal;
