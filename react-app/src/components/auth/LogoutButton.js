import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { Modal } from '../../context/Modal';

const LogoutButton = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };


  return (
    <>
      <i className="fa-solid fa-right-from-bracket" onClick={() => setShowModal(true)}></i>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className="modal-del-container">
                <div className="modal-header">
                    <h2>Logout</h2>
                </div>
                <div className='modal-msg-container'>
                    <div>{`Are you sure you want to logout?`}</div>
                </div>
                <div className='del-mod-bttns'>
                            <button type='submit' onClick={onLogout}><i className="fa-solid fa-check"></i></button>
                            <button type="cancel" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
            </div>
        </Modal>
    )}
</>
  )


};

export default LogoutButton;
