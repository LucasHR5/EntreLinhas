import logo from '../../assets/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px; 
`
const LogoImage = styled.img`
  margin-right: 0.1em;
  margin-left: 20px;
  margin-top: 5px;
  width: 2em;
  height: 2em;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
                LogoImage />
            <p> <strong>Entre</strong>Linhas</p>
        </LogoContainer>
    )
}

export default Logo