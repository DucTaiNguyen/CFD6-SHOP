import { useEffect, useState } from 'react'
import './assets/css/custom.scss'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import Auth from './page/auth'

import Home from './page/home'
import Product from './page/product'
import store from './redux'
import page404 from './page/404'
import About from './page/about'
import Contact from './page/contact'
import FAQ from './page/FAQ'
import TranslateProvider from './core/Translate'
import vi from './translate/vi.json'
import china from './translate/china.json'


function App() {

  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])

  let translate = {
    vi,
    china
  }
  return (
    <TranslateProvider translate={translate}>
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/auth' component={Auth} />
              <Route path='/product' component={Product} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/faq' component={FAQ} />

              <Route component={page404} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </TranslateProvider>

  );
}

export default App;
