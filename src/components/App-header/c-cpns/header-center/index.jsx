import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { Headercenter } from './style'
const Headercenterwrapper = memo(() => {
    return (
        <Headercenter>
            <div className='search-bar'>
                <div className="text">
                    搜索房源和体验
                </div>
                <div className="icon">
                    <IconSearchBar />
                </div>

            </div>
        </Headercenter>
    )
})
export default Headercenterwrapper