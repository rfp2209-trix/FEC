import styled from 'styled-components';

export const DarkBG = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
top: 0%;
left: 0%;
background: rgba(0, 0, 0, 0.5);
z-index: 50;
`;

export const QAModalContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  min-heigth: 400px;
  width: ${(props) => props.width};
  min-width: 600px;
  padding: 20px;
  background: #f0fff0;
`;

export const AnswerModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 37.5%;
  left: 25%;
  height: 25%;
  width: 50%;
  min-height: 300px;
  background: #f0fff0;
  min-width: 450px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
