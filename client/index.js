import React from 'react'
import ReactDom from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import App from './Containers/RootContainer'
import 'babel-polyfill'
import '../client/Home/css/bootstrap.css'
import '../client/Home/css/fontawesome-all.css'
import '../client/Home/css/magnific-popup.css'
import '../client/Home/css/styles.css'
import '../client/Home/css/swiper.css'

import getStore from './redux'

// create our store
const { store, persistor } = getStore()

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
