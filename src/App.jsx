import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/App-footer'
import AppHeader from './components/App-header'
import routers from './router'

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


export default memo(function App() {

  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {
          useRoutes(routers)
        }
      </div>
      <AppFooter />
     

    </div>
  )
})
