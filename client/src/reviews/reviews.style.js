import styled from 'styled-components';

export const GridSpan = styled.span`
  grid-area: ${(props) => props.area};
  justify-self: ${(props) => (props.justify ? props.justify : 'center')};
  white-space: nowrap;
  overflow: visible;
`;

export const ReviewsFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || '0px'};
`;

export const ReviewsListContainer = styled.div`
  width: 50%;
`;

export const ReviewTileList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 8px 0px ;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 75vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &::-webkit-scrollbar {
      display: none;
    }
`;

export const ReviewsListButton = styled.button`
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

export const StyledSortSelect = styled.select`
  background: white;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px
`;
