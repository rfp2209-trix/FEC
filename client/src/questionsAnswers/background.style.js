import styled from 'styled-components';

export const BackgroundOpacityDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
padding: 20px;
background: rgba(0, 0, 0, 0.5);
position: fixed
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
