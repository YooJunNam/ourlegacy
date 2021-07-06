import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <section>
      <Container>
        <ContactContainer>
          <ContactLeft>
            <h7>WEB SHOP</h7>
            <p>
              <a>store@ourlegacy.se</a>
            </p>
            <br />
            <h7>WEB RETURN ADDRESS</h7>

            <p>
              FAO OUR LEGACY <br />
              c/o Korallen <br />
              AB Ålandsgatan 10 <br />
              50441 Borås
              <br />
              Sweden
              <br />
              <br />
              <h7>SOCIAL</h7>
              <p>
                <a>Instagram</a>
                <br />
                <a>Facebook</a>
                <br />
                <a>Pinterest</a>
                <br />
                <a>Twitter</a>
              </p>
            </p>
          </ContactLeft>
          <ContactRight>
            <h7>HEAD OFFICE</h7>
            <p>
              OUR LEGACY <br />
              Birger Jarlsgatan 67 <br />
              113 56 Stockholm <br />
              Sweden <br />
              <a>info@ourlegacy.se</a>
            </p>
            <h7>WHOLESALE</h7>
            <p>
              <a>sales@ourlegacy.se</a>
            </p>
            <h7>PRESS</h7>
            <p>
              <a>press@ourlegacy.se</a>
            </p>
            <h7>WORK SHOP</h7>
            <p>
              <a>workshop@ourlegacy.se</a>
            </p>
            <h7>GENERAL</h7>
            <p>
              <a>info@ourlegacy.se</a>
            </p>
          </ContactRight>
        </ContactContainer>
      </Container>
    </section>
  );
}

export default Contact;

const Container = styled.div`
  margin-top: 170px;
  display: block;
`;

const ContactContainer = styled.div`
  display: inline-flex;
  border: 3px solid;
  padding: 30px;
  width: 40%;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.5;
  letter-spacing: 0.04em;
  font-weight: 700;
  text-align: left;
`;

const ContactLeft = styled.div`
  flex: 1;
  font-size: 13px;
  padding: 20px;
  font-weight: 700;
`;

const ContactRight = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 13px;
  font-weight: 700;
`;
