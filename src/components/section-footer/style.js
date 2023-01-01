import styled from "styled-components";


export const SectionfooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
.info{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
    .text {
      color: ${props => props.color};
      margin-right: 6px;
    }
    
}

`