import styled from "styled-components";
export const Headerright = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
font-weight: 600;
margin-right: 24px;
.btns{
    color: ${props => props.theme.text.primaryColor};
    font-size: 14px;
    display: flex;
    align-items: center;
    box-sizing: content-box;
    .btn{
        color: ${props => props.theme.text.primaryColor};
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        border-radius: 22px;
        cursor: pointer;
        box-sizing: content-box;
        &:hover{
            background-color: #f5f5f5;
        }
    }
}
.profile{
    position: relative;
    color: ${props => props.theme.text.primaryColor};
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    justify-content: space-evenly;
    box-shadow: ${props => props.theme.mixin.boxShadow};
    .panel{
        top: 54px;
        right: 0;
        position: absolute;
        width: 240px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0,0,0,.2);
        color: #666;
        .top,.bottom{
            padding: 10px 0;
            .item{
                height: 40px;
                line-height: 40px;
                padding: 0 16px;
                    
                &:hover {
                background-color: #f5f5f5;
                }
            }
        }
        .top {
        border-bottom: 1px solid #ddd;
      }
    }
}
`