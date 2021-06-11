import React from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    min-width:15%;
    background-color: orange;    
`

export default class Filter extends React.Component {
    render() {
        return (
            <ContainerFiltro>
                {/* <h3>Filtros</h3>
                <InputContainer>
                Valor mínimo:
                    <input
                     type="number"
                        value={this.props.minFilter}
                        onChange={this.props.onChangeMinFilter}
                    />
                </InputContainer> */}

            </ContainerFiltro>
            )


    }

}
