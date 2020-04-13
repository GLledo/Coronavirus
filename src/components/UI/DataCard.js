import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from '../../contexts/ThemeContext'

const DataContainer = styled.div`
    color: ${props => props.theme.color};
    text-align: center;
`

const Number = styled.p`
    font-weight: bold;
    font-size: 32px;
`

const DataCard = ({number, title}) =>{

    const theme = useContext(ThemeContext)

    return(
        <DataContainer theme = {theme}>
            <Number>{number}</Number>
            <div>{title}</div>
        </DataContainer>
    )
}

DataCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default DataCard;