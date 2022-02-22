import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`


export const LinkButton = styled(NavLink)`
  padding: 15px 40px;
  cursor: pointer;
  &.active{
    background: ${(props) => props.theme.tertiary};
    border-radius: 10px;
  }
`

export const FunctionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputContainer = styled.div`
  position: relative;
  margin-right: 20px;
`

export const Input = styled.input`
  padding: 20px 15px 20px 50px;
  background: ${(props) => props.theme.tertiary};
  border: unset;
  border-radius: 10px;
  color: ${(props) => props.theme.mainFontColor};
  width: 300px;
`

export const SearchIcon = styled.img`
  position: absolute;
  top: 30%;
  left: 15px;
  height: 20px;
`

export const CurrencyContainer = styled.div`
  margin-right: 20px;
  position: relative;
`

export const CurrencySelect = styled.select`
  background: ${(props) => props.theme.tertiary};
  border: unset;
  border-radius: 10px;
  color: ${(props) => props.theme.mainFontColor};
  padding: 18px 10px 18px 40px;
  width: 115px;
`

export const CurrencyOption = styled.option`
  padding: 10px 20px;
`

export const CurrencyIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 5px;
`

export const ThemeChangerButton = styled.button`
  display: flex;
  padding: 15px 20px;
  background: ${(props) => props.theme.tertiary};
  cursor: pointer;
  border-radius: 10px;
`

export const ThemeChangerIcon = styled.img`
height: 25px;
`


export const LinkContainer = styled.div`

`
