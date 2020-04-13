import React from 'react'
import { Link} from 'react-router-dom'
import {home,spain, contact} from '../../conf/routes'
import PropTypes from 'prop-types'


const MainMenu = ({onClickChangeButton}) => (
    <nav>
        <ul>
            <li>
                <Link to={home()}>Home</Link>
            </li>
            <li>
                <Link to={spain()}>Spain</Link>
            </li>
            <li>
                <Link to={contact()}>Contacto</Link>
            </li>
            <li>
                <button onClick={onClickChangeButton}>Cambiar tema</button>
            </li>
        </ul>
    </nav>
)

MainMenu.propTypes = {
    onClickChangeButton: PropTypes.func.isRequired
}

export default MainMenu