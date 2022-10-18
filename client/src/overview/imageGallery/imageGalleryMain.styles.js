/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainImage = styled.section`

@media only screen and (max-width: 601px) {
  height: 300px;
  width: 300px;
  margin: auto;
  transition: all .7s;
}
 height: 750px;
 width: 750px;

  > img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 100% 25;
  }
`;
