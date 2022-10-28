import styled from 'styled-components';

export const StyledTile = styled.li`
  --rating: ${(props) => props.rating};
  --star-size: ${(props) => props.starSize};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid black;
  padding: 5px 5px 20px 5px;
  min-width: 350px;
  width: 65vw;
`;

export const TileFlex = styled.div`
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

    &:hover{
      color: #acc8d7;
    }
`;

export const ReviewImg = styled.img`
  width: 75px;
  height: 50px;
  display: inline-block;
  margin: 0px 4px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StyledResponse = styled.div`
  padding: 10px;
  background: #DEDEDE;
`;

export const ModalImg = styled.img`
  max-height: 50vh;
  max-width: 75vw;
`;

export const NoStyleButton = styled.button`
  border: none;
  background: white;
  font-size: 14px;
  font-style: italic;
  font-family: 'Roboto Condensed', sans-serif;

  &:hover{
    color: #acc8d7;
  }
`;