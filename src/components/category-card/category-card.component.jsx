import React from 'react';

import styled from 'styled-components';
const CardContainer = styled.div`
  width: ${props => {
    console.log(props.size);
    if (props.size === 'large') {
      return '46vw;';
    } else {
      return '30vw;';
    }
  }}
  height: ${props => {
    if (props.size === 'large') {
      return '50vh;';
    } else {
      return '30vh;';
    }
  }}
	background-image: url(${props => props.imageUrl});
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 10px;
	max-width

`;

const InnerCard = styled.div`
  height: 75px;
  width: 100px;
  &:hover {
    opacity: 0.8;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.7;
  span {
    margin: 5px 0;
  }
`;

const CategoryCard = ({ name, title, size, imageUrl }) => {
  return (
    <CardContainer size={size} imageUrl={imageUrl}>
      <InnerCard>
        <span>{name.toUpperCase()}</span>
        <span>{title.toUpperCase()}</span>
      </InnerCard>
    </CardContainer>
  );
};

export default CategoryCard;
