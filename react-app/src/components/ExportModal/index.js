import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ExportForm from './ExportForm';
import "./ExportForm.css"

function ExportModal({ calendars }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Export Calendar</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ExportForm calendars={calendars} hideModal={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default ExportModal;
