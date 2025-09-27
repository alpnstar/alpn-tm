import React, { FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import './styles/index.css'
import ProjectsPage from '@/pages/projects/ui/ProjectsPage'
import { ROUTES } from '@/shared/config/routes'

const App: FC = () => {
  return (
    <body className='bg-surface'>
      <div className='app'>
        <Routes>
          <Route path={ROUTES.home} element={<ProjectsPage />} />
        </Routes>
      </div>
    </body>
  )
}

export default App
