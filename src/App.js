import Header from './components/header';
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #5a7791 35%, #022742);
`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  )
}

export default App;
