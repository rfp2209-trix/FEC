import styled from 'styled-components';

export const DarkBG = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
top: 0%;
left: 0%;
background: rgba(0, 0, 0, 0.5);
z-index: 50;
`;

export const QAModalContainer = styled.form`
  position: fixed;
  z-index: 999;
  top: 37.5%;
  left: 25%;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-heigth: 400px;
  min-width: 600px;
  padding: 20px;
  background: #f0fff0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 37.5%;
  left: 25%;
  height: 25%;
  width: 50%;
  min-height: 500px;
  background: #f0fff0;
  min-width: 450px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
