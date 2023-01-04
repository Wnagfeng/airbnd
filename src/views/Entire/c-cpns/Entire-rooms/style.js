import styled from "styled-components";



export const EntireRoomswrapper = styled.div`

position: relative;
  padding: 30px 20px;
  margin-top: 20px;
  .list{
    display: flex;
flex-wrap: wrap;
  }
  .title {
    font-size: 22px;
    font-weight: 900;
    color: #222;
    margin: 0 0 -14px 10px;
  }
> .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 24px;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
  }
`