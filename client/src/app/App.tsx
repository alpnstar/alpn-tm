import React, { FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import './styles/index.css'
import HomePage from '@/pages/home/ui/HomePage'
import { ROUTES } from '@/shared/config/routes'

const App: FC = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
