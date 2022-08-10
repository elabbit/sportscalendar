import React from 'react';
import { Modal } from '../../context/Modal';

function ErrorModal({ hideModal, showModal, validationErrors }) {
    return (
        <>
            {showModal && (
                <Modal onClose={hideModal}>
                    <div className="modal-err-container">
                        <div className="modal-header">
                            <h2>Error</h2>
                        </div>
                        <div>
                            <ul className="errors">
                                {
                                    validationErrors.map(error => (
                                        <li key={error}>{error}</li>
                                    ))
                                }
                            </ul>
                            <div className='err-mod-bttns'>
                                <button type='submit' onClick={hideModal}><i className="fa-solid fa-check"></i></button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default ErrorModal;
