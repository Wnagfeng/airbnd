import styled from "styled-components";
export const ItemWrapper = styled.div`
flex-shrink: 0;
 width: ${props => props.itemWidtch};
 padding: 8px;
 .iner{
  width: 100%;
  .deic{
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }
  .name{
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
  .price {
    margin: 8px 0;
  }
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
    margin-top: -5px;
    display: flex;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.verifyColor};
    flex-direction: column;

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
  
 
 

 
  

`