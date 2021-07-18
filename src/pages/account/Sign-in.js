import React from 'react';
import styled from 'styled-components';

function Signin() {
  return (
    <section>
      <Container>
        <ContactContainer>
          <h2>REGISTER</h2>
          <br />
          <h5>BILLING/INVOICE ADDRESS</h5>
          <br />

          <div>
            <SigninInputForm
              style={{}}
              placeholder="First Name"
            ></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="Last Name"></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="E-mail"></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="Address"></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="Zip Code"></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="City"></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="Phone number"></SigninInputForm>
          </div>
          <div>
            <SigninInputForm placeholder="Password"></SigninInputForm>
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
                type="checkbox"
                className="SigninCheckbox"
                style={{
                  verticalAlign: 'middle',
                }}
              ></input>
            </div>
          </div>
          <button
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
