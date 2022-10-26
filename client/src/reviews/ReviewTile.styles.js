import styled from 'styled-components';

export const StyledTile = styled.li`
  --rating: ${(props) => props.rating};
  --star-size: ${(props) => props.starSize};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || 'space-between'};
  font-size: ${(props) => props.styleFontSize};
  gap: ${(props) => props.gap || '0px'};
`;

export const SummaryDiv = styled.div`
  overflow-wrap: break-word;
  font-size: 22px;

  &::first-line{
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: white;
  text-decoration: underline;
  padding: 0;
  margin; 0;
  font-size: 14px;
  font-family: 'Roboto Condensed', sans-serif;
`;
