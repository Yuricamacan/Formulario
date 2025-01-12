import styled from "styled-components";
import Formulario from "./assets/formulario";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;

  background: black;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`

function App() {
  
  return (
    <AppContainer>
      <Formulario/>
    </AppContainer>
  )
}

export default App
