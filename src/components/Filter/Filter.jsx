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
                <p>área do Filtro aqui</p>
            </ContainerFiltro>

        )


    }

}
