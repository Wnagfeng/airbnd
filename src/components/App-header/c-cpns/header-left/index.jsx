import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Headerleft } from './style'
const Headerleftwrapper = memo(() => {

    const navigate = useNavigate()
    function logoClickHandl() {
        navigate("/home")

    }
    return (
        <Headerleft>
            <div className='logo' onClick={logoClickHandl}>
                <IconLogo  />

            </div>
        </Headerleft >
    )
})
export default Headerleftwrapper