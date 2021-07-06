import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

function Body() {
  const [hover, setHover] = useState(false);

  return (
    <div className="MidContainer">
      <section>
        <img
          className="Free"
          src="https://ourlegacy.centracdn.net/client/dynamic/articles/freew__9957.jpg"
          alt=""
        ></img>
      </section>

      <section id="firstSection">
        <div className="gridContainer">
          <Link to="/category">
            <div
              className="item"
              onMouseOver={() => {
                setHover(true);
              }}
              onMouseOut={() => {
                setHover(false);
              }}
            >
              <img
                src="https://ourlegacy.centracdn.net/client/dynamic/articles/landing_mens_w22_3834.jpg"
                alt=""
                width="590"
                height="700"
              />
              <MenNew ishovered={hover}>
                <MenNewArrival>MENS NEW ARRIVALS</MenNewArrival>
              </MenNew>
            </div>
          </Link>

          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/landing_womens_w22_3743.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="gridContainer">
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/extended_landing_3447.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/glasseslanding_6337.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="gridContainer">
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/extrabigkopia_8886.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/bambo002fuji1007_4429.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="gridContainer">
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/210520__ol__0182_3369.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/_dsc2164_3087.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="gridContainer">
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/ww_2_9685.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/ww_3_6955.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="gridContainer">
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/_0001_details_39_1415_5400.jpeg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/landingss_0002_201105__ourlegacy007496_18_1172.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>

      <section>
        <div className="gridContainer">
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/sekvens_2271.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
          <div className="item">
            <img
              src="https://ourlegacy.centracdn.net/client/dynamic/articles/ourlegacyberlin-mikaelolsson9598b_2022.jpg"
              alt=""
              width="590"
              height="700"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}
const MenNew = styled.div`
  display: ${(props) => (props.ishovered ? 'table' : 'none')};
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 0;
  transition: all 0.2s;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
`;

const MenNewArrival = styled.p`
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  font-size: 1.375rem;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: black;
`;

export default Body;
