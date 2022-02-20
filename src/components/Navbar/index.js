import React from "react"
import {
    CurrencyContainer, CurrencyIcon, CurrencyOption, CurrencySelect,
    FunctionContainer,
    Header,
    Input, InputContainer,
    LinkButton,
    LinkContainer, SearchIcon,
    ThemeChangerButton,
    ThemeChangerIcon
} from "./style"
import theme_change_icon from "./icons/theme_change_icon.svg"
import search_icon from "./icons/search_icon.svg"
import currency_icon from "./icons/currency_icon.svg"

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
                <FunctionContainer>
                    <InputContainer>
                        <Input placeholder="Search..." type="text"/>
                        <SearchIcon src={search_icon}/>
                    </InputContainer>
                    <CurrencyContainer>
                        <CurrencySelect name="" id="">
                            <CurrencyOption value="usd">
                                USD
                            </CurrencyOption>
                            <CurrencyOption value="eur">
                                EUR
                            </CurrencyOption>
                        </CurrencySelect>
                        <CurrencyIcon src={currency_icon}/>
                    </CurrencyContainer>
                    <ThemeChangerButton>
                        <ThemeChangerIcon src={theme_change_icon} alt=""/>
                    </ThemeChangerButton>
                </FunctionContainer>
            </Header>
        )
    }
}

export default Navbar
