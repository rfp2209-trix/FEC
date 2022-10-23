/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const OverviewContent = styled.section`

  @media only screen and (max-width: 601px){
    display: flex;
    flex-direction: column;
  }
  margin-top: 90px;
  background-color: white;
  width: 100vw;
`;

export const OverviewColumns = styled.section`
@media only screen and (max-width: 601px){
  display: flex;
  flex-direction: column;
  margin: auto;
}

display: flex;
flex-direction: row;
// width: 100vw;
`;

export const ImageContainer = styled.section`

  // padding-top: 12px;
  background-color: white;
  display: flex;

  // flex-direction: row;
  // flex: 2;

`;

export const ProductActivityContainer = styled.section`
  padding-top: 25px;
  display: flex;
  background-color: white;
  flex-direction: column;
  flex:1;
  justify-content: flex-start;
  // width: 100vw;
  padding-left: 15px;
  flex-basis: 100%;

`;

export const AddInformationContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
