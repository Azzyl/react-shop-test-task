import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import initStore, { history } from './initStore'
import App from './containers'
import { PersistGate } from 'redux-persist/integration/react'

import 'sanitize.css/sanitize.css'
import './assets/styles/index.scss'

const target = document.querySelector('#root')

render(
  <Provider store={initStore().store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={initStore().persistor} >
        <div>
          <App/>
        </div>
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  target
)
