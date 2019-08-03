import React from 'react'
import { Route, Link } from 'react-router-dom'
import Catalogue from '../components/catalogue'
import Basket from '../components/basket'
import { ShoppingBasket } from '@material-ui/icons'
import classNames from 'classnames'
import Notifications from '../common/notifications'

const App = props => {

  return (<div>
    <Notifications/>
    <header>
      <Link to={'/'}>
      <span
        className={classNames('link', {})}
      >
      Catalogue
      </span>
      </Link>
      <Link to={'/basket'}>
        <ShoppingBasket className='icon'/>
      </Link>
    </header>

    <main>
      <div className='main-container'>
        <Route exact path='/' component={Catalogue}/>
        <Route exact path='/basket' component={Basket}/>
      </div>
    </main>
  </div>)
}

export default App
