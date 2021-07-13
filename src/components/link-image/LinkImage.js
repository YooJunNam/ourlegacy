import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkImage = ({ src, width = 590, height = 700, hoverMsg }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="item"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <Activeimage
          src={src}
          alt=""
          width={width}
          height={height}
          className="imageSize"
        />
        {isHovered ? (
          <HoverCategory>
            <HoverMessage>{hoverMsg}</HoverMessage>
          </HoverCategory>
        ) : undefined}
      </div>
    </div>
  );
};

const HoverCategory = styled.div`
  display: table;
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

const HoverMessage = styled.p`
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

export default LinkImage;
