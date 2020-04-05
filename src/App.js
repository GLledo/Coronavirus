import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import Spain from './Spain'
import ThemeContext from './ThemeContext'
import {lightTheme , darkTheme} from './styles/Theme'
import styled from 'styled-components'

const MainContainer = styled.div`
  background-color:${props => props.theme.body}
`

export default function App() {

    const [isDarkthem,setIsDarkthem] = useState(false)
    
    const handleChangeTheme = () => {
      
      setIsDarkthem(oldValue => !oldValue)

    }

    const currentTheme = isDarkthem ? darkTheme : lightTheme

    return (
        <ThemeContext.Provider value = {currentTheme}>
          <MainContainer theme={currentTheme}>
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/spain">Spain</Link>
                    </li>
                    <li>
                      <button onClick={handleChangeTheme}>Cambiar tema</button>
                    </li>
                  </ul>
                </nav>

                <Switch>
                  <Route path="/spain">
                    <Spain />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
          </MainContainer>
        </ThemeContext.Provider>
      )
}

