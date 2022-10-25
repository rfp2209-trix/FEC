import React from 'react';
import styled from 'styled-components';
import Stars from '../reviews/Stars.jsx';

export default function Card({
  category, name, price, rating, img, toggleModal, currentProduct, imgs,
}) {
  const addToOutfitHandler = () => {
    const localStorageOnLoad = JSON.parse(window.localStorage.getItem('OUTFIT_LIST'));
    const localStorageIndexOnLoad = JSON.parse(window.localStorage.getItem('OUTFIT_LIST_INDEX'));
    if (localStorageIndexOnLoad[currentProduct.id] === undefined) {
      currentProduct.styleDetails = { results: imgs };
      localStorageIndexOnLoad[currentProduct.id] = localStorageOnLoad.length;
      localStorageOnLoad.push(currentProduct);
      window.localStorage.setItem('OUTFIT_LIST', JSON.stringify(localStorageOnLoad));
      window.localStorage.setItem('OUTFIT_LIST_INDEX', JSON.stringify(localStorageIndexOnLoad));
      window.dispatchEvent(new Event('storage'));
    }
  };
  return (
    <CardContainer>
      <aside>
        <CardImg image={img} alt="product img" />
        <CompareButtonContainer onClick={toggleModal}>
          <img src="https://static.thenounproject.com/png/141961-200.png" width="25px" height="25px" alt="comparison arrow button" />
        </CompareButtonContainer>
        <AddToOutfitButtonContainer onClick={addToOutfitHandler}>
          <img src="https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_960_720.png" width="40px" height="40px" alt="add to outfit star button" />
        </AddToOutfitButtonContainer>
        <CardText>
          {category}
        </CardText>
        <CardTitle>
          {name}
        </CardTitle>
        <CardPrice>
          $
          {price}
        </CardPrice>
        <div className="Stars" style={{ '--rating': rating, '--star-size': '20px' }} aria-label={rating}>
          <Stars />
        </div>
      </aside>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  contain: content;
  margin: 0px;
  padding: 0px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

const CardImg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  margin: auto;
  width: 258px;
  height: 258px;
  `;

const CompareButtonContainer = styled.div`
position: absolute;
height: 25px;
width: 25px;
top: 5%;
right 0%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
font-size: 16px;
cursor: pointer;
border-radius: 5px;
`;

const AddToOutfitButtonContainer = styled.div`
position: absolute;
height: 25px;
width: 25px;
top: 3%;
left 5%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
font-size: 16px;
cursor: pointer;
border-radius: 5px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
`;

const CardText = styled.div`
  font-size: 16px;
`;

const CardPrice = styled.div`
  font-size: 14px;
  padding-bottom: 6px;
`;
