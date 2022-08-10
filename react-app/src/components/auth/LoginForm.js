import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import ErrorModal from '../ErrorModal';

const LoginForm = ({ setShowLogin }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
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

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <form onSubmit={onLogin}>
        <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={errors} />
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            required
          />
          <button type='submit'>Login</button>
        </div>
      </form>
<div>
  Not a member? Click
      <button onClick={()=>setShowLogin(false)}>here</button>
      to sign up.

</div>
    </div>
  );
};

export default LoginForm;
