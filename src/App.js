import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ProtectedRoute } from './components'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  Contact,
  SingleContact,
  CashOrders,
  OnlineOrders,
  Users,
  SingleUser,
  Products,
  Test,
  SingleCashOrder,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<LandingPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='contact/:id' element={<SingleContact />} />
          <Route path='cashOrders' element={<CashOrders />} />
          <Route path='cashOrders/:id' element={<SingleCashOrder />} />
          <Route path='onlineOrders' element={<OnlineOrders />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<SingleUser />} />
          <Route path='products' element={<Products />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
