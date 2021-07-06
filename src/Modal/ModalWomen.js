import React from 'react';
import styled from 'styled-components';

function ModalWomen() {
  return (
    <div className="drop">
      <Modal>
        {/* <div className="ProductList"> */}
        <ListContainer>
          <ModalList>
            <a href="#" className="GoList">
              NEW ARRIVALS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SHIRTING
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              JERSEY
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              TOPS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SKIRTS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              TROUSERS
            </a>
          </ModalList>

          <ModalList>
            <a href="#" className="GoList">
              DRESSES
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              LEATHER
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SUITING
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              OUTWEAR
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              JEANS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              KNITWEAR
            </a>
          </ModalList>

          <ModalList>
            <a href="#" className="GoList">
              SHOES
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              ACCESSORIES
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              JEWELERY
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              BAGS & WALLETS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              EYEWEAR
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              BOOKS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              HANDS
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

export default ModalWomen;
