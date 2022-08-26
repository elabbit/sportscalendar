import React from 'react';
import { Modal } from '../../context/Modal';

function ConfirmationModal({ hideModal, showModal, eventsNumber, selectedTitle, setAddList }) {

    const handleClick = () => {
        hideModal();
        setAddList([]);
    }



    return (
        <>
            {showModal && (
                <Modal onClose={hideModal}>
                    <div className="modal-err-container">
                        {eventsNumber === 1 ?
                            <div className="confirm-mod-msg">
                                <span>{eventsNumber}</span> event added to <span>{selectedTitle}</span>.
                            </div>
                            :
                            <div className="confirm-mod-msg">
                                <span>{eventsNumber}</span> events added to <span>{selectedTitle}</span>.
                            </div>

                        }
                        <div className='err-mod-bttns'>
                            <button type='submit' onClick={handleClick}><i className="fa-solid fa-check"></i></button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default ConfirmationModal;
