/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailDetailScroll = styled.section`

  @media only screen and (max-width: 601px){
    display: flex;
    transition: all .20s;

  }

  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
  background-color: honeydew;

`;

export const ThumbsDetail = styled.div`
  // display: flex;
  background-color: olive;

`;

export const ThumbImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-style: solid;
  border-color: white;
  object-fit: contain;
  background-color: turquoise;
`;
