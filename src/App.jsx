import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Settings from './Pages/Settings'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/settings' element={<Settings />} />
        </Route >
      </Routes>
    </div>
  )
}

export default App;