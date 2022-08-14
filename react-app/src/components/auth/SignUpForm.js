import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/session';
import ErrorModal from '../ErrorModal';
import DemoLogin from './DemoLogin';

const SignUpForm = ({ setShowLogin }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    const errorsArray = [];

    const data = await dispatch(signUp(username, email, password, repeatPassword));
    if (data) {
      errorsArray.push(...data)
    }
    if (errorsArray.length) {
      setErrors(errorsArray)
      return setShowModal(true);
    }
  }


  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };


  return (
    <div className="login-container">
      <div className="login-header">
        Create account.
      </div>
      <form className="login-form" onSubmit={onSignUp}>
        <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
        <div>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            placeholder="Username"
            maxLength="40"
          ></input>
        </div>
        <div>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            placeholder="Email"
            maxLength="50"
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            placeholder="Password"
            maxLength="20"
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            placeholder="Confirm Password"
            maxLength="20"
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <div className="login-bot-bttns">
        Already have an account?
        <button onClick={() => setShowLogin(true)}>log in</button> or try our <DemoLogin />
      </div>
    </div>
  );
};

export default SignUpForm;
