
import React, { memo,  useEffect, useState } from 'react'
import { Headerright } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
const Headerrightwrapper = memo(() => {

    const [showpanel, setshowpanel] = useState(false)

    function changeshowpanel() {
        setshowpanel(true)
    }


    useEffect(() => {
        function windowhandleClick() {
            setshowpanel(false)
        }
        window.addEventListener("click", windowhandleClick, true)
        return () => {
            window.removeEventListener("click", window.addEventListener("click", windowhandleClick, true)
                , true)
        }
    })

    return (
        <Headerright>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <IconGlobal />
                </span>
            </div>
            <div className='profile' onClick={changeshowpanel}>
                <IconMenu />
                <IconAvatar />
                {showpanel ? (<div className='panel'>
                    <div className='top'>
                        <div className='item register'>注册</div>
                        <div className='item login'>登录</div>
                    </div>
                    <div className='bottom'>
                        <div className='item'>出租房源</div>
                        <div className='item'>开展体验</div>
                        <div className='item'>帮助</div>

                    </div>

                </div>) : ''}
            </div>
        </Headerright>
    )
})
export default Headerrightwrapper