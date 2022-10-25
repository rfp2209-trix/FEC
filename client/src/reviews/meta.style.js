import styled from 'styled-components';

export const MetaList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 8px 0px;
`;

export const CharGrid = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "characteristic . . . ."
    "1 2 3 4 5"
    "low-desc . mid-desc . high-desc"
`;

export const charDescribeBar = styled.div`
  grid-area: ${(props) => props.area};

`;
