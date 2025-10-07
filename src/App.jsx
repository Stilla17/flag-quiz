import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Pages/Layout'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route element={<Layout />}>
          <Route />
        </Route >
      </Routes> */}

      <HomePage />
    </div>
  )
}

export default App
