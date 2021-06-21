import React from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    min-width:15%;
    border: 1px solid lightgray;
    margin-right: 1%;
    padding: 0 1%;
    @media (max-width: 414px) {
        width: 98%;
        margin-bottom: 2%;
        }
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default class Filter extends React.Component {
    render() {
        return (
            <ContainerFiltro>
                <h3>Filtros</h3>
                <InputContainer>
                    <p>Valor mínimo:</p>
                    <input
                        type="number"
                        value={this.props.filtroMin}
                        onChange={this.props.onChangeMin}
                    />
                </InputContainer>
                <InputContainer>
                    <p>Valor máximo:</p>
                    <input
                        type="number"
                        value={this.props.filtroMax}
                        onChange={this.props.onChangeMax}
                    />
                </InputContainer>

                <InputContainer>
                    <p>busca por nome:</p>
                    <input
                        type="text"
                        value={this.props.filtroBusca}
                        onChange={this.props.onChangeBusca}
                    />
                </InputContainer>

            </ContainerFiltro>
            )


    }

}
