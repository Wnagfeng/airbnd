import React, { memo } from 'react'
import Headercenterwrapper from './c-cpns/header-center'
import Headerleftwrapper from './c-cpns/header-left'
import Headerrightwrapper from './c-cpns/header-right'
import { HeaderWrapper } from './style'
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <Headerleftwrapper />
      <Headercenterwrapper />
      <Headerrightwrapper />
    </HeaderWrapper>
  )
})

export default AppHeader