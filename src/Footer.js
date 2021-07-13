import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Totalfooter>
      <Footers>
        <LeftFooter>
          <FooterBtn>
            <Link
              to="/contact"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              CONTACT
            </Link>
          </FooterBtn>
          <FooterBtn>SHIPPING & RETURN</FooterBtn>
          <FooterBtn>TERMS & CONDITIONS</FooterBtn>
          <FooterBtn>PRIVACY PILICY</FooterBtn>
        </LeftFooter>
        <RightFooter>
          <Suggestion>
            <span>SUBSCRIBE FOR NEWS AND EXCLUSIVE OFFERS</span>
          </Suggestion>
          <div>
            <Email>
              <input className="input" placeholder="E-MAIL"></input>
            </Email>
            <div>
              <SubscribeBtn>SUBSCRIBE</SubscribeBtn>
            </div>
          </div>
        </RightFooter>
      </Footers>
    </Totalfooter>
  );
}

const Totalfooter = styled.div`
@media (max-width: 1060px) {
  `;

const Footers = styled.div`
  margin-top: 20px;
  border-top: 2px solid;
  padding-bottom: 170px;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  @media (max-width: 1060px) {
    border-top: none;
  }
`;

const LeftFooter = styled.nav`
  float: left;
  padding-top: 20px;
  display: flex;
  width: 50%;
  @media (max-width: 1060px) {
    flex-direction: column;
    width: 100%;
    float: none;
  }
`;

const FooterBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin-left: 10px;
  font-size: 16px;
  @media (max-width: 1060px) {
    text-align: left;
    margin-top: 1rem;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 0;
    border-top: 1px solid;
    margin-left: 0;
  }
`;

const RightFooter = styled.nav`
  float: right;
  border-left: 2px solid;
  padding-left: 10px;
  margin-right: 40px;
  @media (max-width: 1060px) {
    border-left: none;
    margin-top: 3px;
    border-top: 1px solid;
    width: 100%;
    float: none;
    padding-right: 10px;
  }
`;

const Suggestion = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 12px;
  @media (max-width: 1060px) {
    text-align: left;
  }
`;

const Email = styled.div`
  margin-top: 30px;
  @media (max-width: 1060px) {
    text-align: left;
    width: 100%;
  }
`;

const SubscribeBtn = styled.button`
  background: #dcdcdc;
  border: none;
  cursor: pointer;
  width: 290px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #a9a9a9;
  font-weight: 700;
  font-size: 13px;
  @media (max-width: 1060px) {
    width: 100%;
  }
`;

export default Footer;
