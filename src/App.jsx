import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routers from './router'

export default memo(function App() {
 
  return (
    <div className='app'>
      <div className='header'>header</div>
      <div className='page'>
        {
          useRoutes(routers)
        }
      </div>
      <div className='footer'>footer</div>

    </div>
  )
})
