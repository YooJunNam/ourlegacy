import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import categories from '../static/categories';

function NavMenu({ categoryName }) {
  return (
    <div className="drop">
      <NavigationList>
        {/* <div className="ProductList"> */}
        <ListContainer>
          {categories[categoryName]?.level2
            ?.sort((a, b) => a.id - b.id)
            .map((item) => (
              <NavigationMenu>
                <Link
                  to={`/category/${item.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <span href="#" className="GoList">
                    {item.level2}
                  </span>
                </Link>
              </NavigationMenu>
            ))}
        </ListContainer>
        {/* </div> */}
      </NavigationList>
    </div>
  );
}

const NavigationList = styled.div`
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

const NavigationMenu = styled.li`
  color: white;
  font-family: 'Neue Haas Unica Pro', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.8125rem;
  margin-bottom: 10px;
`;

export default NavMenu;
