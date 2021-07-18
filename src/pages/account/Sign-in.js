import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../App';
import { signin } from '../../lib/api/auth';

function Signin({ history }) {
  const [registerInfo, setRegisterInfo] = useState({
    lastName: undefined,
    password: undefined,
    email: undefined,
    address: undefined,
    firstName: undefined,
    phone: undefined,
    zipCode: undefined,
    city: undefined,
  });
  const { userState, updateUserState } = useContext(UserContext);

  const changeInfo = (inputName, value) => {
    setRegisterInfo((prev) => setRegisterInfo({ ...prev, [inputName]: value }));
  };

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    changeInfo(name, value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signin(registerInfo)
      .then((res) => {
        console.log(res.data);
        updateUserState(res.data);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (userState) {
    history.push('/');
  }

  return (
    <section>
      <Container>
        <ContactContainer>
          <h2>REGISTER</h2>
          <br />
          <h5>BILLING/INVOICE ADDRESS</h5>
          <br />

          <form onSubmit={submitHandler}>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                style={{}}
                placeholder="First Name"
                name="firstName"
                required
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="Last Name"
                name="lastName"
                required
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="E-mail"
                name="email"
                required
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="Address"
                name="address"
                required
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="Zip Code"
                name="zipCode"
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="City"
                name="city"
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="Phone number"
                name="phone"
                required
              ></SigninInputForm>
            </div>
            <div>
              <SigninInputForm
                onChange={changeInputHandler}
                placeholder="Password"
                name="password"
                type="password"
                required
              ></SigninInputForm>
            </div>

            <div style={{ margin: '30px' }}>
              <span style={{ display: 'inline' }}>
                I accept terms & conditions and I have read and understood the
                Privacy Policy
              </span>
              <div
                style={{
                  display: 'inline',
                  marginTop: '10px',
                  width: '100%',
                  padding: '6px',
                }}
              >
                <input
                  required
                  type="checkbox"
                  className="SigninCheckbox"
                  style={{
                    verticalAlign: 'middle',
                  }}
                ></input>
              </div>
            </div>
            <button
              action="submit"
              style={{
                width: '50%',
                height: '50px',
                color: 'white',
                background: 'black',
                border: 'none',
                fontWeight: '600',
              }}
            >
              <span>CREATE AN ACCOUNT</span>
            </button>
          </form>
        </ContactContainer>
      </Container>
    </section>
  );
}
export default Signin;

const Container = styled.div`
  margin-top: 200px;
  margin-bottom: 50px;
  display: inline-block;
`;

const ContactContainer = styled.div`
  display: inline-block;
 text-align: center;
  border: 3px solid;
  padding: 30px;
  width: 100%;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.5;
  letter-spacing: 0.04em;
  font-weight: 700;
  @media (max-width: 1060px) {
    max-width: 100%;
    height: auto;
    flex-direction: column;
`;

const SigninInputForm = styled.input`
  display: inline-block;
  width: 70%;
  margin: 10px;
  border: none;
  border-bottom: 1px solid;
`;
