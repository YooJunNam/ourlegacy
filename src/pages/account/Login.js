import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <LoginSection>
      <LoginContationer>
        <LoginForm>
          <span style={{ marginBottom: '20px', fontWeight: '600' }}>
            SIGN INTO YOUR ACCOUNT
          </span>
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <input
              type="text"
              name="id"
              id="id"
              autoComplete="off"
              required
              style={{ border: '0', width: '100%' }}
              placeholder="Email Address"
            ></input>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              name="pw"
              id="pw"
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
              type="submit"
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
        <p style={{ marginTop: '30px' }}>
          <a href="" style={{ color: 'black', fontWeight: '500' }}>
            Register a new account
          </a>
        </p>
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
