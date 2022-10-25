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
  min-width: 800px;
  padding: 20px;
  background: #f0fff0;
`;
