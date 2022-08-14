import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import FetchSports from './FetchSports';
import "./FetchSports.css"

function FetchSportsModal({day}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Sports Events</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FetchSports hideModal={()=>setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default FetchSportsModal;
