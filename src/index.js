import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import stores from './stores'
import routes from './routes'

import 'normalize.css'
import 'styles/index.styl'

// import API from 'helpers/api'
// API.releatedArtists('28ExwzUQsvgJooOI0X1mr3').then(res => {
//   if (res.statusText === 'OK') {
//     console.log(res.data)
//   }
// })

// Render the main component into the dom
ReactDOM.render(
  <Provider store={stores}>
    { routes }
  </Provider>,
  document.getElementById('app')
)
