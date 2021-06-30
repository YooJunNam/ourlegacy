import React, { Component } from 'react';
import styled from "styled-components";


function Footer() {
  return (

    <footer>
      <Footers>
        <LeftFooter>
          <FooterBtn>CONTACT</FooterBtn>
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
            <Shipping>
              <span>Shipping to Korea, Republic of,</span>
              <changeCountry>change country</changeCountry>
            </Shipping>
          </div>
        </RightFooter>
      </Footers>
    </footer>
  )
};

const Footers = styled.div`
 margin-top: 20px;
  border-top: 2px solid;
  padding-bottom: 170px;
  font-family: "Neue Haas Unica Pro", "Helvetica", "Arial", sans-serif;
  `;

const LeftFooter = styled.nav`
  float: left;
  padding-top: 20px;
  display: flex;
  width: 50%;
  `;

const FooterBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  margin-left: 10px;
  font-size: 16px;
  `;

const RightFooter = styled.nav`
  float: right;
  border-left: 2px solid;
  padding-left: 10px;
  margin-right: 40px;
  `;

const Suggestion = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 12px;
  `;

const Email = styled.div`
margin-top: 30px;
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
`;

const Shipping = styled.div`
margin-top: 20px;
  font-weight: 500;
  font-size: 13px;
  `;

const changeCountry = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid;
  font-weight: 500;
  `;

export default Footer;