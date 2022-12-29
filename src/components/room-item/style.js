import styled from "styled-components";
export const ItemWrapper = styled.div`
 width: 25%;
 padding: 8px;
 .iner{
  width: 100%;
 }
 .cover{
  padding: 66.66% 8px 0;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  /*
  妈的ui吃屎了给的宣传图大小不一样 
  我他妈只能先把盒子给撑起来
  完了开启定位让图片附上去 
  经过计算给他66.66%的padding就行
  */

  img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

 }
 
 
  margin-top: 20px;
  box-sizing:border-box;


  
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
  
 
 

 
  

`