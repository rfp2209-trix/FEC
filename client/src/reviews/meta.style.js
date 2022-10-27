import styled from 'styled-components';

export const MetaList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 8px 0px;
`;

export const CharGrid = styled.li`
  display: grid;
  width: 250px;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "characteristic . . . ."
    "middle middle middle middle middle"
    "low-desc . mid-desc . high-desc";
  margin-bottom: 8px
`;

export const CharDescribeBar = styled.div`
  grid-area: ${(props) => props.area};
  display: inline-block;
  justify-self: center;
  height: 12px;
  width: 60.5px;
  border: 1px solid white;
  border-radius:2px;
  background: #acc8d7;
  vertical-align: baseline;
`;

export const FullCharBar = styled.div`
  grid-area: middle
`;

export const DownTriangle = styled.div`
  position: absolute;
  left: ${(props) => props.percentLeft};
  width: 0;
  height: 0;
  transform: translate(-14px);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top:  14px solid #536872;
  `;

export const MetaContainer = styled.div`
  width: 260px;
`;

export const PercentageReviewBar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: 12px;
  min-width 100px;
  border-radius: 2px;
  background: linear-gradient(to right, #536872 ${(props) => props.percent}, #acc8d7 ${(props) => props.percent});
`;

export const StyledRatingBreakdown = styled.li`
  --rating: ${(props) => props.starRating};
  font-size: 18px;
  width: 250px;

    &:hover{
      color: #acc8d7;
      --star-color: #536872;
    }
`;