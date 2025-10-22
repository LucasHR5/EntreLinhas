import './App.css';
import Logo from './components/logo'
import profile from './assets/perfil.svg'
import bag from './assets/sacola.svg'

const headerOptions = ['Home', 'Categorias', 'Estante', 'Favoritos']
const icons = [ profile, bag ]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {headerOptions.map((text) => (
            <li className='optionsChild'><p>{text}</p></li>
          ))}
        </ul>

        <ul className='icons'>
          {icons.map((icons) => (
            <li className='iconsChild'><img src={icons} alt='icon'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
