/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const OverviewContent = styled.section`
  margin-top: 90px;
  background-color: red;
  width: 100vw;
`;

export const OverviewColumns = styled.section`

display: flex;
flex-direction: row;
// width: 100vw;
`;

export const ImageContainer = styled.section`

  padding-top: 12px;
  background-color: blue;
  display: flex;
  flex-direction: row;
  flex: 1;


`;

export const ProductActivityContainer = styled.section`
  padding-top: 25px;
  display: flex;
  background-color: pink;
  flex-direction: column;
  flex:1;
  justify-content: space-between;
  // width: 100vw;
  padding-left: 15px;

`;

export const AddInformationContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: purple;
`;
