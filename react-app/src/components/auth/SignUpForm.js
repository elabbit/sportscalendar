import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import ErrorModal from '../ErrorModal';

const SignUpForm = ({ setShowLogin }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
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
  <div>
    <form onSubmit={onSignUp}>
      <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
      <div>
        <label>Username</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}

        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}

        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}

        ></input>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
    <div>Already a member? click
      <button onClick={() => setShowLogin(true)}>here</button>
      to login.
    </div>
  </div>
);
};

export default SignUpForm;
