/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbsDetail = styled.div`

`;
export const ThumbImage = styled.div`

background-image: url(${(props) => props.photo});
background-size: cover;
width: 125px;
height: 150px;
background-position: center;
margin: auto;
border-radius: 6px;
:hover {
  -webkit-filter: brightness(75%);
}
`;
