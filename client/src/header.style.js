/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const PageHeader = styled.div`
 .header-inner-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;


  > img {
  padding-top: 0;
  margin-top: 0;
  max-width: 70px;
  }
  > h2 {
 }

 .search {
  margin: auto;
  align-self: center;
  text-align: center;
  > input {
    padding-top: 10px;
    min-height: 30px;
    min-width: 300px;
    border-bottom: 4px solid grey;
    border-top: none;
    border-right: none;
    border-left: none;
    :hover {
      box-shadow: 5px 5px 50px lightgrey;
      cursor: text;
    }
  }
 }

 .links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 50px;
 }

 .links div {
    min-width: 100px;
    align-self: center;
    text-align: center;
    border-radius: 8px;
    padding: 10px 20px;
    :hover {
      background-color: #f2f2f2;
      /* box-shadow: 5px 5px 50px lightgrey; */
      cursor: grab;
    }
 }





`;
