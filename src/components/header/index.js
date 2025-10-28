import Logo from '../logo'
import OptionsHeader from '../options-header'
import Icons from '../icons'
import './style.css'

function Header () {
    return (
        <header className='App-header'>
        <Logo/>
        <OptionsHeader/>
        <Icons/>
      </header>
    )
}

export default Header