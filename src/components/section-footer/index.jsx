import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionfooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
const SectionFooter = memo(function SectionFooter(props) {
    let showname = "显示全部"
    const { name } = props
    if (name) {
        showname = `显示更多${name}房源`
    }
    return (
        <SectionfooterWrapper color={ name ? "#00848A":"black"}>
            <div className='info'>
                <span className='text'>
                    {showname}
                </span>
                <IconMoreArrow className="icon" />


            </div>
        </SectionfooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string

}

export default SectionFooter
