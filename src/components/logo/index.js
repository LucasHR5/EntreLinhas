import logo from '../../assets/logo.png'
import './style.css'
function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p> <strong>Entre</strong>Linhas</p>
        </div>
    )
}

export default Logo