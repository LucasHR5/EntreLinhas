import profile from '../../assets/perfil.svg'
import bag from '../../assets/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center; 
`
const icons = [profile, bag]

function Icons() {
    return (
        <Icones>
            {icons.map((icons) => (
                <Icone>
                    <img src={icons} alt='icon'></img>
                </Icone>
            ))}
        </Icones>
    )
}

export default Icons