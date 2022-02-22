import './App.css';
import {CoinList, CoinPage, Portfolio} from "./pages";
import {CoinBar, Navbar} from "./components";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Container, darkTheme, GlobalStyle, lightTheme, PageContainer, Wrapper} from "./globalStyles/style";
import {ThemeProvider} from "styled-components";
import {getItem, setItem} from "./utils/localStorage"

import React from "react";

const currencyLocalStorageName = 'currency';
const themeLocalStorageName = 'theme';
const lightThemeName = 'light';
const darkThemeName = 'dark';

function App() {

    const handleTheme = () => {
        return getItem(themeLocalStorageName) === darkThemeName ? darkTheme : lightTheme
    }

    const handleThemeChange = () => {
        setItem(themeLocalStorageName, getItem(themeLocalStorageName) === darkThemeName ? lightThemeName : darkThemeName);
    }

    const handleCurrencyChange = (currency) => {
        setItem(currencyLocalStorageName, currency)
    }

    return (
        <ThemeProvider theme={handleTheme}>
            <GlobalStyle/>
            <Wrapper>
                <Container>
                    <Router>
                        <Navbar currency={getItem(currencyLocalStorageName)} handleCurrencyChange={handleCurrencyChange} handleThemeChange={handleThemeChange}/>
                        <PageContainer>
                            <CoinBar currency={getItem(currencyLocalStorageName)}/>
                            <Switch>
                                <Route exact path="/" component={CoinList}/>
                                <Route exact path="/portfolio" component={Portfolio}/>
                                <Route exact path="/coin/:id" component={CoinPage}/>
                                <Redirect path="*" to="/"/>
                            </Switch>
                        </PageContainer>
                    </Router>
                </Container>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
