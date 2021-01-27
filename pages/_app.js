import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap');

  * {
  
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Comfortaa', 'cursive';
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
