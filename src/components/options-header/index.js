import styled from 'styled-components'

const OptionsChild = styled.li`
  display: flex;
  min-width: 120px;
  font-size: 16px;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Options = styled.ul`
    display: flex;
`

const headerOptions = ['Home', 'Categorias', 'Estante', 'Favoritos']

function OptionsHeader() {
    return (
        <Options>
            {headerOptions.map((text) => (
                <OptionsChild>
                    <p>{text}</p>
                </OptionsChild>
            ))}
        </Options>
    )
}

export default OptionsHeader