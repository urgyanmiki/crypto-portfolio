import styled, {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.mainFontColor};
  }
  
  a {
    color: ${(props) => props.theme.mainFontColor};
    text-decoration: unset;
  }
`

export const darkTheme = {
    main: '#191b1f',
    secondary: '#1f2128',
    tertiary: '#2C2F36',
    mainFontColor: '#fff'
}

export const lightTheme = {
    main: '#ffffff',
    secondary: '#f7f7f7',
    tertiary: '#edeff2',
    mainFontColor: '#2C2F36'
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Container = styled.div`
  width: 1140px;
  padding: 20px 90px;
`
export const PageContainer = styled.div`
    background: ${(props) => props.theme.secondary};
`