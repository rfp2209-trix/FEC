import styled from 'styled-components';

export const BigButton = styled.button`
  height: 40px;
  width: 200px;
  background: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  border: none;
  margin: 0px 8px 0px 0px;
  border-radius: 6px;
  border: lightgrey solid;
  :hover {
    opacity: .8;
    cursor: grab;
    background: lightgrey;
  }
  .ask-button {
    backgound-color: lightgrey;
    opacity: .6;
    border: gray solid;
  }
`;

export const LittleButton = styled.button`
  height: 30px;
  width: 70px;
  background: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  border: none;
  margin: 0px 8px 0px 8px;
  box-sizing: border-box;
  border-radius: 6px;
  :hover {
    opacity: .8;
    cursor: grab;
    background: lightgrey;
  }
`;

export const ReportButton = styled(LittleButton)`
color: tomato;
border: none;
height: 50px;
border-radius: 12px;
:hover {
    opacity: .8;
    cursor: grab;
    background: lightgrey;
  }
`;

export const LittleReportButton = styled(ReportButton)`
color: tomato;
border: none;
height: 30px;
width: 70px;
border-radius: 6px;
:hover {
    opacity: .8;
    cursor: grab;
    background: lightgrey;
  }

`;

export const AnswerButton = styled.button`
  height: 40px;
  width: 90px;
  background: #32a852;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  border: none;
  margin: 0px 8px 0px 8px;
  box-sizing: border-box;
  border-radius: 12px;
  :hover {
    opacity: .8;
    cursor: grab;
    background: lightgrey;
  }
`;
