import styled from "styled-components";

export const Main = styled.main`
  background: #1E1E1E;
  width: 100%;
`;

export const WrapContainer = styled.section`
  background: #1E1E1E;
  width: 100%;
  min-height:100vh;
`
export const Box = styled.section`
  background-color: #1E1E1E
;
  margin: 8px 8px;
  width: 25.813rem;
  height: 17.875rem;
  border-radius: 0.5rem;
  img{
    width: 100%;
    height: 8.938rem;
  }
  h5{
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    color:#FFFFFF;
    margin: 0px;
  }
  p{
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color:#FFFFFF;
    margin: 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 50px;
  }
  span{
    font-size: 15px;
    line-height: 23px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.37);
    margin: 0px;
  }
`;

export const WrapBox = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 10px 40px;
    background: #121212;
    .Box{
        flex-shrink: 1;
    }
`;
