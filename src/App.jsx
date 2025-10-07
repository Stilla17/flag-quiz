import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Pages/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route />
        </Route >
      </Routes>
    </div>
  )
}

export default App