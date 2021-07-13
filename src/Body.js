import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import LinkImage from './components/link-image/LinkImage';

function Body() {
  return (
    <div className="MidContainer">
      <BodyFirstSection>
        <img
          className="Free"
          src="https://ourlegacy.centracdn.net/client/dynamic/articles/freew__9957.jpg"
          alt=""
        ></img>
      </BodyFirstSection>

      <Section id="firstSection">
        <GridContainer>
          <Link to="/category">
            <LinkImage
              hoverMsg={'MENS NEW ARRIVALS'}
              src={
                'https://ourlegacy.centracdn.net/client/dynamic/articles/landing_mens_w22_3834.jpg'
              }
            ></LinkImage>
          </Link>
          <MobileCategoryName>MENS NEW ARRIVALS</MobileCategoryName>
          <LinkImage
            hoverMsg={'WOMENS NEW ARRIVALS'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/landing_womens_w22_3743.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>WOMENS NEW ARRIVALS</MobileCategoryName>
        </GridContainer>
      </Section>

      <Section>
        <GridContainer>
          <LinkImage
            hoverMsg={'EXTENDED THIRD CUT'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/extended_landing_3447.jpg'
            }
          ></LinkImage>

          <MobileCategoryName>EXTENDED THIRD CUT</MobileCategoryName>
          <LinkImage
            hoverMsg={'EYE WEAR'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/glasseslanding_6337.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>EYE WEAR</MobileCategoryName>
        </GridContainer>
      </Section>

      <Section>
        <GridContainer>
          <LinkImage
            hoverMsg={'DRAPE TECH TRUNKS'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/extrabigkopia_8886.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>DRAPE TECH TRUNKS</MobileCategoryName>
          <LinkImage
            hoverMsg={'MENS SHIRTING'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/bambo002fuji1007_4429.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>MENS SHIRTING</MobileCategoryName>
        </GridContainer>
      </Section>

      <Section>
        <GridContainer>
          <LinkImage
            hoverMsg={'CRANIUM RING'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/210520__ol__0182_3369.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>CRANIUM RING</MobileCategoryName>
          <div className="item">
            <Activeimage
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/_dsc2164_3087.jpg"
              alt=""
              width="590"
              height="700"
            />
          </div>
        </GridContainer>
      </Section>

      <Section>
        <GridContainer>
          <LinkImage
            hoverMsg={'CAMION MULE'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/ww_2_9685.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>CAMION MULE</MobileCategoryName>
          <LinkImage
            hoverMsg={'LEND SHIRT CUT LINES'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/ww_3_6955.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>LEND SHIRT CUT LINES</MobileCategoryName>
        </GridContainer>
      </Section>

      <Section>
        <GridContainer>
          <LinkImage
            hoverMsg={'BIG PIQUET'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/_0001_details_39_1415_5400.jpeg'
            }
          ></LinkImage>
          <MobileCategoryName>BIG PIQUET</MobileCategoryName>

          <LinkImage
            hoverMsg={'FLAT TOE BOOT'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/landingss_0002_201105__ourlegacy007496_18_1172.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>FLAT TOE BOOT</MobileCategoryName>
        </GridContainer>
      </Section>

      <Section>
        <GridContainer>
          <div className="item">
            <Activeimage
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/sekvens_2271.jpg"
              alt=""
              width="590"
              height="700"
            />
          </div>
          <LinkImage
            hoverMsg={'STORES'}
            src={
              'https://ourlegacy.centracdn.net/client/dynamic/articles/ourlegacyberlin-mikaelolsson9598b_2022.jpg'
            }
          ></LinkImage>
          <MobileCategoryName>STORES</MobileCategoryName>
        </GridContainer>
      </Section>
    </div>
  );
}

const BodyFirstSection = styled.section`
  margin-top: 3rem;
  @media (max-width: 1060px) {
    display: none;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const Activeimage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-width: 100%;
    height: auto;
  @media (max-width: 1060px) {
    max-width: 100%;
    height: auto;
    
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* media 처리 */
  gap: 8px;
  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const MobileCategoryName = styled.div`
  font-size: 1.375rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 1.4rem;
  display: none;
  @media (max-width: 1060px) {
    display: block;
  }
`;

export default Body;
