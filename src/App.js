import './App.css';
import {CoinList, CoinPage, Portfolio} from "./pages";
import {Navbar} from "./components";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {GlobalStyle, darkTheme, lightTheme, Wrapper, Container} from "./globalStyles/style";
import {ThemeProvider} from "styled-components";
import {getItem} from "./utils/localStorage"

import React from "react";

function App() {

    const handleTheme = () => {
        return getItem(process.env.REACT_APP_THEME_LOCAL_STORAGE_NAME) === 'dark' ? darkTheme : lightTheme
    }

    return (
        <ThemeProvider theme={handleTheme}>
            <GlobalStyle/>
            <Wrapper>
                <Container>
                    <Router>
                        <Navbar></Navbar>
                        <Switch>
                            <Route exact path="/" component={CoinList}/>
                            <Route exact path="/portfolio" component={Portfolio}/>
                            <Route exact path="/coin/:id" component={CoinPage}/>
                            <Redirect path="*" to="/"/>
                        </Switch>
                    </Router>
                </Container>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
