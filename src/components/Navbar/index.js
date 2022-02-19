import React from "react"
import {Header, LinkButton, LinkContainer} from "./style"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <Header>
                <LinkContainer>
                    <Link to="/">
                        <LinkButton>
                            Coins
                        </LinkButton>
                    </Link>
                    <Link to="/portfolio">
                        <LinkButton>
                            Portfolio
                        </LinkButton>
                    </Link>
                </LinkContainer>
                <div>
                </div>
            </Header>
        )
    }
}

export default Navbar
