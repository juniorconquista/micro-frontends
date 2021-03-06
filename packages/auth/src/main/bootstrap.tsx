import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// Mount function to start up the app
const mount = (el: Element): void => {
  ReactDOM.render(<App />, el)
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('auth')

  if (devRoot) {
    mount(devRoot)
  }
}

// We are running through container
// and we should export the mount function
export { mount }
