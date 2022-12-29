import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { Headerleft } from './style'
const Headerleftwrapper = memo(() => {
    return (
        <Headerleft>
            <IconLogo/>
        </Headerleft>
    )
})
export default Headerleftwrapper