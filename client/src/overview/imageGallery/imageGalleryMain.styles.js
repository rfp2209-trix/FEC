/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainImage = styled.section`

position: relative;
overflow: hidden;


@media only screen and (max-width: 601px) {
  height: 300px;
  width: 300px;
  margin: auto;
  transition: all .7s;
}

 height: 700px;
 width: 700px;

  .mag {
      z-index: 20;
      font-size:40px;
      position: absolute;
      color: white;
      top: 10px;
      right: 10px;
    }

  .ar {
    font-size: 40px;
    z-index: 50;
    position: absolute;
    right: 0;
    top: 50%;
    text-align: right;
    color: white;
  }
  .al {
    font-size: 40px;
    z-index: 50;
    position: absolute;
    right: 100;
    top: 50%;
    text-align: right;
    color: white;
  }


 .mainPhoto {
    object-fit: cover;
    height: 100%;
    width: 100%;

    border-radius: 6px;
    transition: all .2s ease-in-out;
  }
  :hover .mainPhoto {
    transform: scale(3.0)
  }
`;
