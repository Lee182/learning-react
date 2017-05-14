import React from 'react'
import { render } from 'react-dom'
import FormStore from '../components/FormStore'
import App from '../components/App'

render(
  <App store={FormStore}/>,
  document.getElementById('app')
)
