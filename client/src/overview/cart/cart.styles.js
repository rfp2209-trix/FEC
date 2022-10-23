/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid lightgrey;
  border-radius: 6px;
  margin-right: 15px;
  margin-bottom: 15px;



  .cart-title {
    display: flex;
    height: 30px;
    font-size: 22pt;
    justify-content: flex-start;
    padding-top: 8px;
    padding-left: 6px;
  }

  .frm-container {
   display: flex;
   flex-direction: row;
   justify-content: center;
   height: auto;
   padding-left: 6px;
   padding-right: 6px;
   padding-top: 6px;
  }

  select {
    height: 25px;
  }
  .addCart {
    border: solid grey;
    border-radius: 100px;
    transition-duration: 0.4s;
    background-color: white;
    text-align: center;
    padding: 15px 30px;
    font-size: 15px;
    align-self: bottom;
  }
  .addCart:hover {
    box-shadow: 10px 10px 50px grey;
    cursor: grab

  }

  .btn-container {
    display: flex;
  }

`;
