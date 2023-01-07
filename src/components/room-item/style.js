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

  .slide{
    position: relative;
    &:hover{
      .control{
        display: flex;
      }
    }
    .control{
      position: absolute;
      z-index: 99;
      cursor: pointer;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
         &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 31px;
      width: 30%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            background-color: #bfa;
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
  
 
 

 
  

`