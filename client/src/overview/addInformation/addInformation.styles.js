/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AdditionalInfoContainer = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
> h1 {
  font-size: 16pt;
  line-height: 16pt;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: 100px;
}

.rows {
  display: flex;
  flex-direction: row;

> div {
  min-width: 100px;
}
.basic-text {
  margin-top: 10px;

  font-size: 12pt;
}
}



`;
