import styled from "styled-components";



export const EntirePaginationWrapper = styled.div`
display: flex;
justify-content: center;
.info{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .anticon-left{
        font-size: 24px;
        margin: 0 9px;
        &:hover {
        text-decoration: underline;
      }
    }
    .anticon-right{
        font-size: 24px;
        margin: 0 9px;
        &:hover {
        text-decoration: underline;
      }
    }
    .desc {
      margin-top: 16px;
      color: #222;
    }
}
`