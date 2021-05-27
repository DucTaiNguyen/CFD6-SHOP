import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import AuthHtml from './page/auth'

import Home from './page/home'
import Product from './page/product'
import store from './redux'

function App() {

  let [state, setState] = useState({
    login: JSON.parse(localStorage.getItem('login'))
  })

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/auth' component={AuthHtml} />
            <Route exact path='/product' component={Product} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
