import styled from 'styled-components';

export const BigButton = styled.button`
  height: 40px;
  width: 200px;
  background: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  border: none;
  margin: 0px 8px 0px 0px;
  box-sizing: border-box;
`;

export const LittleButton = styled.button`
  height: 30px;
  width: 70px;
  background: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  border: 1px solid gray;
  margin: 0px 8px 0px 8px;
  box-sizing: border-box;
`;

export const ReportButton = styled(LittleButton)`
color: tomato;
border: 1px solid gray;
height: 50px;
`;

export const LittleReportButton = styled(ReportButton)`
color: tomato;
border: 1px solid gray;
height: 30px;
width: 70px;
`;

export const AnswerButton = styled.button`
  height: 40px;
  width: 90px;
  background: #536872;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  border: 1px solid #acc8d7;
  margin: 0px 8px 0px 8px;
  box-sizing: border-box;
`;
