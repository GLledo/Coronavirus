import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Number = styled.p`
    font-weight: bold;
    font-size: 32px;
`
const DataContainer = styled.div`
    text-align: center
`
const DataCard = ({number, title}) =>(
    <DataContainer>
        <Number>{number}</Number>
        <div>{title}</div>
    </DataContainer>
)

DataCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default DataCard;