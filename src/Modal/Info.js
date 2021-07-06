import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <div className="drop">
      <Modal>
        {/* <div className="ProductList"> */}
        <ListContainer>
          <ModalList>
            <a href="#" className="GoList">
              STORES
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              CONTACT
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              ABOUT
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              CAREERS
            </a>
          </ModalList>
          <ModalList>
            <a href="#" className="GoList">
              SHOWROOM
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
  width: 65%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  text-align: right;
  background-color: black;
  margin-right: 100px;
`;

const ModalList = styled.li`
  color: white;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.8125rem;
  margin-bottom: 10px;
`;

export default Info;
