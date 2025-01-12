import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App.jsx'

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled/>
    <App />
  </StrictMode>,
)
