import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
// import 'normalize.css'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { theme } from './components/theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
