import React from 'react';
import styled from 'styled-components';
import categories from '../static/categories';

function NavMenu({ categoryName }) {
  return (
    <div className="drop">
      <Modal>
        {/* <div className="ProductList"> */}
        <ListContainer>
          {categories[categoryName]?.level2?.map((item) => (
            <ModalList>
              <a href="#" className="GoList">
                {item.level2}
              </a>
            </ModalList>
          ))}
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

export default NavMenu;
