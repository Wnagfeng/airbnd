import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectiontabsWrapper } from './style'
const SectionTabs = memo(function SectionTabs(props) {
    const [current, setcurrent] = useState(0)
    const { TabNames=[], activetableName } = props
    const itemClickhandl = (index) => {
        setcurrent(index)
    }
    return (
        <SectiontabsWrapper>
            {
                TabNames.map((item, index) => {
                    return (
                        <div
                            key={item}
                            className={classNames("item", { active: index == current })}
                            onClick={(a) => {
                                itemClickhandl(index)
                                activetableName(item)
                            }}
                        >
                            {item}
                        </div>
                    )
                })
            }
        </SectiontabsWrapper>
    )
})

SectionTabs.propTypes = {
    TabNames: PropTypes.array
}

export default SectionTabs
