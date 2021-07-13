import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { Carousel } from 'react-bootstrap';
import DetailBox from '../components/DetailBox/detailbox';

function Detail() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <ContentContainer>
        <ContentImage>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_a07367d216-m2201cbte__0320-full.jpg"
                alt="First slide"
                style={{ maxWidth: '100%', height: 'auto' }}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_29470eec48-m2201cbte__0327-full.jpg"
                alt="Second slide"
                style={{ maxWidth: '100%', height: 'auto' }}
              ></img>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://ourlegacy.centracdn.net/client/dynamic/images/8814_bd105996a9-m2201cbte__0335-full.jpg"
                alt="Third slide"
                style={{ maxWidth: '100%', height: 'auto' }}
              ></img>
            </Carousel.Item>
          </Carousel>
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
              style={{ width: '95%', float: 'left' }}
              bordered={false}
            >
              <Select.Option value="46">46</Select.Option>
              <Select.Option value="48">48</Select.Option>
              <Select.Option value="50">50</Select.Option>
              <Select.Option value="52">52</Select.Option>
            </Select>
          </Size>
          <div>
            <AddCart style={{ marginBottom: '40px' }}>
              <span>ADD TO CART</span>
            </AddCart>
          </div>
          <DetailBox infoname="Details"></DetailBox>
          <DetailBox infoname="Size"></DetailBox>
          <DetailBox infoname="SHipping"></DetailBox>
        </ContentDetail>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 190px;
  @media (max-width: 1060px) {
    justify-content: center;
    display: flex;
    margin-top: 160px;
  }
`;

const ContentContainer = styled.section`
  width: 80%;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ContentImage = styled.div`
  flex: 1;
  @media (max-width: 1060px) {
`;

const ContentDetail = styled.div`
  flex: 1;
  margin-left: 10px;
  padding-left: 40px;
  @media (max-width: 1060px) {
    padding-left:0;
    margin-left:0;
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
  @media (max-width: 1060px) {
    width: 100%;
  }
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
  @media (max-width: 1060px) {
    width: 100%;
  }
`;

export default Detail;
