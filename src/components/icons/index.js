import profile from '../../assets/perfil.svg'
import bag from '../../assets/sacola.svg'
import './style.css'
const icons = [profile, bag]

function Icons() {
    return (
        <ul className='icons'>
            {icons.map((icons) => (
                <li className='iconsChild'><img src={icons} alt='icon'></img></li>
            ))}
        </ul>
    )
}

export default Icons