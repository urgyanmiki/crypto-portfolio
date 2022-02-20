import React from "react"
import {Header, LinkButton, LinkContainer} from "./style"
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <Header>
                <LinkContainer>
                    <LinkButton to="/">
                            Coins
                    </LinkButton>
                    <LinkButton to="/portfolio">
                            Portfolio
                    </LinkButton>
                </LinkContainer>
                <div>
                </div>
            </Header>
        )
    }
}

export default Navbar
