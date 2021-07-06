import React from 'react';
import styled from 'styled-components';

function Collections() {
  return (
    <div className="drop">
      <Modal>
        {/* <div className="ProductList"> */}
        <ListContainer>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2021
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2020
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2020
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              PRE SPRING 2020
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2019
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              PRE FALL 2019
            </a>
          </ModalList>

          <ModalList>
            <a href="#" className="GoList">
              FALL 2018
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2019
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2018
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2017
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2016
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2016
            </a>
          </ModalList>

          <ModalList>
            <a href="#" className="GoList">
              SPRING 2017
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2015
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2015
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2014
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2014
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2013
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2013
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              FALL 2012
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SPRING 2012
            </a>
          </ModalList>
        </ListContainer>
        {/* </div> */}
      </Modal>
    </div>
  );
}

const Modal = styled.div`
  justify-content: center;
  text-align: center;
  width: 140%;
  margin-top: 30px;
`;

const ListContainer = styled.ul`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  text-align: left;
  background-color: black;
`;

const ModalList = styled.li`
  color: white;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.8125rem;
  margin-bottom: 10px;
`;

export default Collections;
