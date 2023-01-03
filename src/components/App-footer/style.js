import styled from "styled-components";
export const AppFooterWrapper = styled.div`
margin-top: 100px;
border-top: 1px solid #EBEBEB;
.wrapper{
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;
}
.service{
    display: flex;
    .item{
        flex: 1;
        .name{
            margin-bottom: 16px;
            font-weight: 700;
            font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC", sans-serif !important;
        }
    }
    .list{
        overflow-wrap: break-word !important;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC", sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        line-height: 1.28571em !important;
        color: rgb(72, 72, 72) !important;

        .iten{
            margin-top: 6px;
            color: #767676;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
.statement {
    margin-top: 30px;
    border-top: 1px solid #EBEBEB;
    padding: 20px;
    color: #767676;
    text-align: center;
  }

`