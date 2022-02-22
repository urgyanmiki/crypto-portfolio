import styled from "styled-components";

export const CoinbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoinBarBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 750px;
  padding: 15px 25px;
  background: ${(props) => props.theme.main};
  border-radius: 0 0 12px 12px;
  min-height: 25px;
`

export const CoinBarIconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoinBarIconBoxIcon = styled.img`
  height: 15px;
  margin-right: 5px;
`

export const CoinBarIconBoxText = styled.label`
  margin-right: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.mainFontColor};
`

export const CoinBarIconBoxProgress = styled.progress`

`
export const CoinBarIconBoxDot = styled.span`
  height: 5px;
  width: 5px;
  background: ${(props) => props.theme.mainFontColor};
  border-radius: 50%;
  margin-right: 5px;
`

export const CoinBarTextBox = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.mainFontColor};
`
