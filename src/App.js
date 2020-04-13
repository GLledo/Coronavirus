import React, {useState, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {home,spain, contact} from './conf/routes'
import ThemeContext from './contexts/ThemeContext'
import {lightTheme , darkTheme} from './styles/Theme'
import styled from 'styled-components'
import MainMenu from './components/UI/MainMenu'

const Home = lazy(() => import('./components/screens/Home'))
const Spain = lazy(() => import('./components/screens/Spain'))
const Contact = lazy(() => import('./components/screens/Contact'))

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
              <Suspense fallback={<div>Cargando...</div>}>
                <div>
                  <MainMenu onClickChangeButton={handleChangeTheme}></MainMenu>
                  <Switch>
                    <Route path={spain()}>
                      <Spain />
                    </Route>
                    <Route path={contact()}>
                      <Contact />
                    </Route>
                    <Route path={home()}>
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Suspense>
            </Router>
          </MainContainer>
        </ThemeContext.Provider>
      )
}

