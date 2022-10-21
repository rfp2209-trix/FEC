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
  .addCart {
    border: solid grey;
    border-radius: 12px;
    transition-duration: 0.4s;
    background-color: skyblue;
    text-align: center;
    padding: 15px 30px;
    font-size: 15px;
    align-self: bottom;
  }
  .addCart:hover {
    background-color: steelblue;
    transform: scale(1.2)
  }

  .btn-container {
    display: flex;
  }

`;
