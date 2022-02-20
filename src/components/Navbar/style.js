import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 90px;
`


export const LinkButton = styled(NavLink)`
  padding: 15px 40px;
  cursor: pointer;
  &.active{
    background: ${(props) => props.theme.tertiary};
  }
`

export const LinkContainer = styled.div`

`
