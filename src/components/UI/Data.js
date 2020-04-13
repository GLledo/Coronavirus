import React from 'react'
import PropTypes from 'prop-types'
import DataCard from './DataCard'
import FlexContainer from './FlexContainer'

const Data = ({deaths,confirmed,recovered}) => (
    <FlexContainer>
       <DataCard title='Muertes' number={deaths}/>
       <DataCard title='Casos Confirmados' number={confirmed}/>
       <DataCard title='Casos Recuperados' number={recovered}/>
    </FlexContainer>
)

//Controlar tipos de variables
Data.propTypes = {
    deaths: PropTypes.number.isRequired,
    confirmed: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired
}

export default Data