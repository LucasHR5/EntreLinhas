import Logo from '../logo'
import OptionsHeader from '../options-header'
import Icons from '../icons'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  background-color: #fff;
  justify-content: center;
`
function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <Icons />
    </HeaderContainer>
  )
}

export default Header