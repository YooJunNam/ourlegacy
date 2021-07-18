import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Alert, Select } from 'antd';
import { Carousel } from 'react-bootstrap';
import DetailBox from '../components/DetailBox/detailbox';
import axios from 'axios';

function Detail({ match }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [item, setItem] = useState({});
  const [error, setError] = useState(null);

  function getItemsDetail(itemId) {
    axios
      .get(`http://192.168.25.48:3000/items/${itemId}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    getItemsDetail(match.params.itemId);
  }, []);

  if (error)
    return (
      <Alert
        message="Error"
        description="Try Again Please."
        type="error"
        showIcon
      />
    );

  return (
    <Container>
      <ContentContainer>
        <ContentImage>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {item?.images?.map((image) => (
              <Carousel.Item>
                <img
                  src={image}
                  alt={item.name}
                  style={{ maxWidth: '100%', height: 'auto' }}
                ></img>
              </Carousel.Item>
            ))}
          </Carousel>
        </ContentImage>

        <ContentDetail>
          <Content>
            <span>{item.name}</span>
            <br />
            <span>{item.priceBeforeDiscount}.00 EUR</span>
          </Content>
          <Size>
            <Select
              defaultValue="SIZE"
              style={{ width: '95%', float: 'left' }}
              bordered={false}
            >
              {item?.options?.map((option) => (
                <Select.Option value={option.id}>{option.name}</Select.Option>
              ))}
            </Select>
          </Size>
          <div>
            <AddCart style={{ marginBottom: '40px' }}>
              <span>ADD TO CART</span>
            </AddCart>
          </div>
          <DetailBox
            infoname="Details"
            description={item.description}
          ></DetailBox>
          <DetailBox infoname="Size" description="Contact me"></DetailBox>
          <DetailBox
            infoname="SHipping"
            description="FREE DELIVERY ON ALL ORDERS OVER €300

Standard Delivery Charges:

USA and Canada / €16

Delivered by DHL Express shipment in 2-5 days

Rest of the World / €19

Delivered by DHL Express shipment in 3-7 days

Russian shipments will be made with FedEx

PLEASE NOTE THAT THE DELIVERY CHARGES DO NOT INCLUDE IMPORT COSTS THAT MAY BE DUE WHEN THE PACKAGE REACHES THE COUNTRY OF DESTINATION."
          ></DetailBox>
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
