import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { LongforWrapper } from './style'
const LongFor = memo(function LongFor(props) {
    const { infoData } = props
    return (
        <LongforWrapper>
            <div className='inner'>
                <div className='item-info'>
                    <img src={infoData.picture_url} alt=""  className='cover'/>
                    <div className='bg-cover'></div>
                    <div className='info'>
                        <div className='city'>
                            {infoData.city}
                        </div>
                        <div className='price'>
                            {infoData.price}
                        </div>
                    </div>

                </div>
            </div>
        </LongforWrapper>
    )
})

LongFor.propTypes = {
    infoData: PropTypes.object

}

export default LongFor
