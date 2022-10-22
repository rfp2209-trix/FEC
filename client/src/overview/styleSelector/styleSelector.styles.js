/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyleContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  > div{
    display: flex;
    flex-direction: row;
    font-size: 18pt;
    font-color:#555555
    justify-content: center;

  }
`;
export const StyleSelectorContainer = styled.section`

/* @media only screen and (max-width: 601px) {
  display: flex;
  flex-direction: column; */

  display: grid;
  grid-template-columns: repeat(4, 125px);
  grid-column-gap: 5px;
  grid-row-gap: 5px;



`;
