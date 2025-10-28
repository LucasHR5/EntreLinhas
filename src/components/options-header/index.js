import './style.css'

const headerOptions = ['Home', 'Categorias', 'Estante', 'Favoritos']

function OptionsHeader() {
    return (
        <ul className='options'>
            {headerOptions.map((text) => (
                <li className='optionsChild'><p>{text}</p></li>
            ))}
        </ul>
    )
}

export default OptionsHeader