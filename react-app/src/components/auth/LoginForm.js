import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import ErrorModal from '../ErrorModal';
import DemoLogin from './DemoLogin';
import './LoginForm.css'

const LoginForm = ({ setShowLogin }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    const errorsArray = [];
    const data = await dispatch(login(email, password));
    if (data) {
      errorsArray.push(...data)
    }
    if (errorsArray.length) {
      setErrors(errorsArray)
      return setShowModal(true);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="login-container">
      <div className="login-header">
        Start here.
      </div>
      <form className="login-form" onSubmit={onLogin}>
        <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
        <div>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
            maxLength={50}
          />
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            maxLength={20}
          />
        </div>
        <button type='submit'>Log In</button>
      </form>
      <div className="login-bot-bttns">
        Don't have an account?
        <button onClick={() => setShowLogin(false)}>sign up</button> or try our <DemoLogin/>
      </div>
    </div>
  );
};

export default LoginForm;
