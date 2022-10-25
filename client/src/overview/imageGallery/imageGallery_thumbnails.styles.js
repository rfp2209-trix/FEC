/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailDetailScroll = styled.section`
  display: grid;
  grid-template-rows: repeat(5, 150px);
  grid-row-gap: 5px;

`;

export const ThumbsDetail = styled.div`
  position: relative;

  .thumbScrollCheckCircle {
  position: absolute;
  top: 4px;
  opacity: .75;
  color: white;
  font-size: 25px;
  z-index: 10;
  }
`;

export const ThumbImage = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 100px;
  height: 150px;
  background-position: center;
  margin: auto;
  scroll-snap-align: start;
  border-radius: 3px;
  :hover {
    -webkit-filter: brightness(75%);
  }
`;
