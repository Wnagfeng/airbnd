import styled from "styled-components";



export const EntireFilterWrapper = styled.div`

    z-index: 9;
    top: 81px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
.filter{
    display: flex;
    .item{
        border: 1px solid #dce0e0;
        margin: 0 4px 0 8px;
        padding: 6px 12px;
        border-radius: 4px;
        color: #484848;
        cursor: pointer;
         
    &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
   
}
`