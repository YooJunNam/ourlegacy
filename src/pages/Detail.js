import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

function Detail() {
  const [openBtn, setOpenBtn] = useState(false);
  const [rotateBtn, setRotateBtn] = useState(false);

  return (
    <Container>
      <ContentContainer>
        <ContentImage>
          <img src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"></img>
        </ContentImage>
        <ContentDetail>
          <Content>
            <span>CAPE PARKA</span> <br />
            <span>BLACK TECH</span> <br />
            <br />
            <span>490.00 EUR</span>
          </Content>
          <Size>
            <Select
              defaultValue="SIZE"
              style={{ width: '500px', float: 'left' }}
              bordered={false}
            >
              <Select.Option value="46">46</Select.Option>
              <Select.Option value="48">48</Select.Option>
              <Select.Option value="50">50</Select.Option>
              <Select.Option value="52">52</Select.Option>
            </Select>
          </Size>
          <div>
            <AddCart>
              <span>ADD TO CART</span>
            </AddCart>
          </div>
          <ProductInfo>
            <div>
              <ProductDetailblock>
                <FirstDetailblock>Details</FirstDetailblock>
                <SecondDetailblock>
                  <InfoBtn
                    onClick={() => {
                      setOpenBtn((prevState) => !prevState);
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
                {openBtn == true ? (
                  <ProductDetail>
                    · Italian fabric <br />
                    · 100% Polyester <br />
                    · Zip closure <br />
                    · Storm flap with snap stud closure <br />
                    · Belted <br />
                    · Internal zip pocket <br />
                    · Drawstring hood rolls away <br />
                    · Two large flap pockets <br />
                    · Relaxed fit <br />
                    · M2201CBTE
                    <br /> <br />
                    Our Cape Parka in Black Tech. <br />
                    Produced in an Italian technical fabric, our relaxed-fitting
                    Cape Parka features features two large flap pockets, a storm
                    flap with snap stud closure, and a drawstring hood that
                    rolls away with snap fastening. <br /> <br />
                    Our Cape Parka is true to size with a relaxed boxy fit. The
                    model is 187 cm tall and is wearing a size 48. <br /> <br />
                    All measurements are taken across the garment in cm while
                    laid flat.
                  </ProductDetail>
                ) : undefined}
              </div>
            </div>
            <div></div>
          </ProductInfo>
        </ContentDetail>
      </ContentContainer>
    </Container>
  );
}

const ProductInfo = styled.div`
  float: left;
  text-align: left;
  margin-top: 60px;
  font-size: 12px;
  min-height: 48px;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: -1px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const ProductDetail = styled.p`
  margin-top: 20px;
  font-size: 0.8125rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0em;
`;

const Container = styled.div`
  margin-top: 180px;
`;

const ContentContainer = styled.section`
  width: 80%;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ContentImage = styled.div`
  flex: 1;
`;

const ContentDetail = styled.div`
  flex: 1;
  margin-left: 10px;
  padding-left: 40px;
`;

const Content = styled.div`
  font-weight: 500;
  text-align: left;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Size = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 24px;
`;

const AddCart = styled.button`
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none;
  background-color: rgba(0, 0, 0, 0.12);
  border: none;
  width: 500px;
  height: 60px;
  font-weight: 700;
  float: left;
  margin-top: 20px;
`;

const ProductDetailblock = styled.div`
  display: flex;
  height: 30px;
  border-bottom: 1px solid;
  width: 500px;
`;

const FirstDetailblock = styled.div`
  flex: 1;
`;

const SecondDetailblock = styled.div`
  flex: 1;
  text-align: right;
  justfy-content: right;
  height: 30px;
`;

const InfoBtn = styled.button`
  cursor: pointer;
  background: white;
  height: 25px;
  border: none;
`;

const NonRotation = styled.svg`
  width: 20px;
  height: 30px;
  cursor: pointer;
  justify-content: center;
`;

const Rotation = styled.svg`
  width: 20px;
  height: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  justify-content: center;
  transform: rotateX(180deg);
`;

export default Detail;
