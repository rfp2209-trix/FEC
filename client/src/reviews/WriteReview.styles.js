import styled from 'styled-components';

export const WarningText = styled.div`
  font-size: 12px;
  color: red;
`;

export const WriteReviewContainer = styled.form`
box-sizing: border-box;
width: 420px;
height: auto;
padding: 20px;
background: white;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
position: fixed
`;

export const CharacteristicsContainer = styled.ul`
list-style-type: none;
padding: 0px 0px 0px 20px;
margin: 0px;
`;

export const StyledTextArea = styled.textarea`
  width: 380px;
  resize: none;
  overflow-wrap: break-word;
  overflow: auto;
  border: 1px solid #acc8d7;
  border-radius: 4px;
  -ms-overflow-style: none;
  scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
`;

export const StyledInput = styled.input`
  width: 380px;
  resize: none;
  border: 1px solid #acc8d7;
  border-radius: 4px;
`;

export const WriteReviewButton = styled.button`
  background: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  border: none;
  margin: 8px 8px 0px 0px;
  box-sizing: border-box;

  &:hover{
    box-shadow: #acc8d7 0px 0px 0px 1px inset, #acc8d7 0px 0px 0px 1px;
    color: #acc8d7;
  }
`;
