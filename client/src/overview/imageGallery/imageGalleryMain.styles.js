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

 /* .mainPhoto {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transition: opacity 1s linear;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 6px;

  } */

  // :hover .mainPhoto {
  //   transform: scale(3.0)
  // }
`;
export const MainPhotoDefault = styled.div`
    background-image: url(${(props) => props.photo});
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transition: opacity 1s linear;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    -webkit-transition: background-image 1s ease-in-out;
    transition: background-image 1s ease-in-out; */
`;

export const MainPhotoZoom = styled.div`

    background-image: url(${(props) => props.photo});
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transition: opacity 1s linear;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    transform: scale(3);
    -webkit-transition: background-image 1s ease-in-out;
    transition: background-image 1s ease-in-out;
`;
