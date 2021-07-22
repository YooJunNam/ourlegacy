import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../App';
import { login } from '../../lib/api/auth';

function Login({ history }) {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });

  const { userState, updateUserState } = useContext(UserContext);

  if (userState) {
    history.push('/');
  }
  const updateLoginInfo = (event) => {
    // input value 가져오기
    const { name, value } = event.target;
    setLoginInfo((pastInfo) => {
      return { ...pastInfo, [name]: value };
    });
  };

  const updateUserCart = () => {
    const cart = window.localStorage.getItem('cart');
    if (cart) {
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(loginInfo.username, loginInfo.password)
      .then((res) => {
        updateUserState(res.data.user);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginSection>
      <LoginContationer>
        <LoginForm onSubmit={handleSubmit}>
          <span style={{ marginBottom: '20px', fontWeight: '600' }}>
            SIGN INTO YOUR ACCOUNT
          </span>
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              required
              style={{ border: '0', width: '100%' }}
              placeholder="Email Address"
              value={loginInfo.username}
              onChange={updateLoginInfo}
            ></input>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              onChange={updateLoginInfo}
              value={loginInfo.password}
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              required
              placeholder="Password"
              style={{
                border: '0',
                width: '100%',
              }}
            ></input>
          </div>
          <div className="btn-area">
            <button
              action="submit"
              style={{
                backgroundColor: 'black',
                border: '0',
                color: 'white',
                width: '100%',
                height: '50px',
                fontWeight: '600',
                marginTop: '15px',
                marginBottom: '20px',
              }}
            >
              SIGN IN
            </button>
          </div>
        </LoginForm>
        <Link to="/Signin" style={{ textDecoration: 'none' }}>
          <p style={{ marginTop: '30px' }}>
            <span href="" style={{ color: 'black', fontWeight: '500' }}>
              Register a new account
            </span>
          </p>
        </Link>
      </LoginContationer>
    </LoginSection>
  );
}

const LoginSection = styled.section`
  margin-top: 200px;
`;

const LoginContationer = styled.div`
  width: 100%;
`;

const LoginForm = styled.form`
  border: 2px solid;
  width: 30%;
  justify-content: center;
  display: inline-block;
  padding: 50px;
  padding-top: 30px;
`;

const InputArea = styled.div``;

export default Login;
