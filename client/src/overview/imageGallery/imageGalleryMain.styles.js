/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainImage = styled.section`
display: flex;
position: relative;
overflow: hidden;
border-radius: 8px;
box-shadow: 10px 10px 50px grey;

@media (max-width: 601px) {
  height: 300px;
  width: 300px;
  margin: auto;
  transition: all .7s;
}

 min-height: 50em; ;
 min-width: 50em; ;

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
`;
export const MainPhotoDefault = styled.div`
  @media (max-width: 601px) {
  height: 300px;
  width: 300px;
  margin: auto;
  transition: all .7s;
}
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 1s linear;
  background-size: cover;
  background-position: top center;
  width: 100%;
  height: 100%;å
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
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
    transform: scale(4);
    -webkit-transition: background-image 1s ease-in-out;
    transition: background-image 1s ease-in-out;
`;
