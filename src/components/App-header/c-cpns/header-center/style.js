import styled from 'styled-components';

export const Headercenter = styled.div`
.search-bar{
    display: flex;
    align-items: center;
    width: 300px;
    height:48px;
    justify-content: space-between;
    padding: 0 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    
    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
      text-align: center;
    }
    .icon{
        display: flex;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #fff;
        background-color: ${props => props.theme.color.primaryColor};
        justify-content: center;

    }
}


`