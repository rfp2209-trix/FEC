/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 10px 10px 50px grey;
  max-width: 550px;

  .user-warning {
    color: red;
  }

  .cart-title {
    text-align: center;
    font-size: 20px;
  }
  .sel-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  select {
    min-width: 100px;
  }

  .selQuan {
    margin-right: 10px;

  }
  .selQuan[data-isdimmed=true] {
    opacity: .2;
  }

  .selQual[data-isdimmed=false] {
    opacity: 0;
  }



  select:hover {
    background-color: #f2f2f2;
    /* box-shadow: 5px 5px 50px lightgrey; */
    cursor: grab;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .addCart {
    border: solid grey;
    border-radius: 100px;
    transition-duration: 0.4s;
    background-color: white;
    text-align: center;
    padding: 10px 20px;
    font-size: 15px;
  }

  .addCart:hover {
    background-color: #f2f2f2;
    /* box-shadow: 5px 5px 50px lightgrey; */
    cursor: grab;
  }


`;
