/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbsDetail = styled.div`


`;
export const ThumbImage = styled.div`

  position: relative;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  width: 125px;
  height: 150px;
  background-position: center;
  margin: auto;
  border-radius: 6px;
  box-shadow: 10px 10px 50px grey;
  :hover {
    -webkit-filter: brightness(75%);
  }

.checkCircle {
  position: absolute;
  opacity: .75;
  color: white;
  font-size: 25px;
}

`;
