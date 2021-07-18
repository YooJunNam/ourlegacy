import { Alert } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DetailBox = ({ infoname, description = '' }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [rotateBtn, setRotateBtn] = useState(false);

  return (
    <ProductInfo>
      <div>
        <ProductDetailblock>
          <FirstDetailblock>{infoname}</FirstDetailblock>
          <SecondDetailblock>
            <InfoBtn
              onClick={() => {
                setOpenDetail((prevState) => !prevState);
                setRotateBtn((prevState) => !prevState);
              }}
            >
              {rotateBtn == true ? (
                <Rotation>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </Rotation>
              ) : (
                <NonRotation>
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </NonRotation>
              )}
            </InfoBtn>
          </SecondDetailblock>
        </ProductDetailblock>

        <div>
          {openDetail == true ? (
            <ProductDetail>{brReplace(description)}</ProductDetail>
          ) : undefined}
        </div>
      </div>
    </ProductInfo>
  );
};

function brReplace(str) {
  return str.replace(/<BR>|<br>|\/N/g, '/n');
}

const ProductInfo = styled.div`
  float: left;
  text-align: left;
  margin-top: 10px;
  font-size: 12px;
  min-height: 48px;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: -1px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: 1060px) {
    width: 100%;
  }
`;

const ProductDetail = styled.p`
  margin-top: 20px;
  font-size: 0.8125rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0em;
  white-space: pre-line;
  width: 500px;
`;

const ProductDetailblock = styled.div`
  display: flex;
  height: 30px;
  border-bottom: 1px solid;
  width: 500px;
  margin-bottom: 20px;
  @media (max-width: 1060px) {
    width: 100%;
  }
`;

const FirstDetailblock = styled.div`
  flex: 1;
  @media (max-width: 1060px) {
    width: 100%;
  }
`;

const SecondDetailblock = styled.div`
  flex: 1;
  text-align: right;
  justfy-content: right;
  @media (max-width: 1060px) {
    width: 100%;
  }
`;

const InfoBtn = styled.button`
  cursor: pointer;
  background: white;
  height: 25px;
  border: none;
`;

const NonRotation = styled.svg`
  width: 1.5em;
  height: 30px;
  cursor: pointer;
  justify-content: center;
  @media (max-width: 1060px) {
    float: right;
  }
`;

const Rotation = styled.svg`
  width: 20px;
  height: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  justify-content: center;
  transform: rotateX(180deg);
`;

export default DetailBox;
