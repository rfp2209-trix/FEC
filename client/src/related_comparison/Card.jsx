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
    <CardContainer href={`?product_id=${currentProduct.id}`}>
      <aside>
        <CardImg image={img} alt="product img" />
        <CompareButtonContainer onClick={(e) => { e.preventDefault(); toggleModal(); }}>
          <span className="material-symbols-outlined">
            compare_arrows
          </span>
        </CompareButtonContainer>
        <AddToOutfitButtonContainer onClick={(e) => { e.preventDefault(); addToOutfitHandler(); }}>
          <span className="material-symbols-outlined">
            add
          </span>
        </AddToOutfitButtonContainer>
        <CardText>
          {category}
          <CardTitle>
            {name}
          </CardTitle>
          <CardPrice>
            $
            {price}
          </CardPrice>
        </CardText>
        <div className="Stars" style={{ '--rating': rating, '--star-size': '20px' }} aria-label={rating}>
          <Stars />
        </div>
      </aside>
    </CardContainer>
  );
}
const CardTitle = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  `;

const CardPrice = styled.div`
  font-size: 14px;
  padding-bottom: 14px;
    `;

const CardText = styled.div`
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 8px;
  margin-left: 3px;
  :hover {
     color: #c9620b;
    }
  `;
const CompareButtonContainer = styled.div`
  position: absolute;
  color: black;
  height: 25px;
  width: 25px;
  top: 3%;
  right 8%;
  cursor: pointer;
  border-radius: 6px;
  :hover {
    color: #c9620b;
  }
  `;
const AddToOutfitButtonContainer = styled.div`
  position: absolute;
  color: black;
  height: 25px;
  width: 25px;
  top: 3%;
  left 3%;
  font-size: 34px;
  cursor: pointer;
  border-radius: 6px;
  :hover {
    color: #c9620b;
  }
  `;

const CardImg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  margin: auto;
  width: 258px;
  height: 258px;
  transition: 0.3s;
  :hover ${CardTitle}, &:hover ${CardPrice} &:hover ${CardText} {
    color: #c9620b;
  }
  `;
const CardContainer = styled.a`
    color: black;
    text-decoration: none;
    contain: content;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    border-radius: 6px;
    :hover ${CardImg} {
      -webkit-transform: scale(1.03);
      -ms-transform: scale(1.03);
      zoom: scale(1.03);
      transition: 0.25s ease;
    }
  `;
