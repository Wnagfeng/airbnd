import styled from "styled-components";

export const SectiontabsWrapper = styled.div`
display: flex;
.item{
    box-sizing: border-box;
    margin: 10px 10px;
    border: 1px solid black;
    padding: 14px 16px;
    flex-basis: 120px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
}

`