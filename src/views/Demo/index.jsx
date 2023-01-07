import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'
const Style = memo(function Style(props) {
    const names = ["abc", "cba", "nba", "mba", "aaa", "bbb", "ccc", "ddd"];
    // 我们需要根据元素的索引来计算偏移量
    const [currentindex, setcurrentindex] = useState(0);

    function handleClick(state) {
        let newindex = state ? currentindex + 1 : currentindex - 1
        if (newindex < 0) newindex = names.length - 1
        if (newindex > names.length - 1) newindex = 0
        setcurrentindex(newindex)
    }
    return (
        <DemoWrapper>
            <div className="control">
                <button onClick={() => {
                    handleClick(false)
                }}>上一个</button>
                <button onClick={() => {
                    handleClick(true)
                }}>下一个</button>
            </div>
            <div className="list">
                {/* 将当前点击的索引传递过去 */}
                <Indicator currentindex={currentindex}>
                    {
                        names.map((item) => {
                            return (
                                <button key={item}>{item}</button>
                            )
                        })
                    }
                </Indicator>
            </div>


        </DemoWrapper>

    )
})

Style.propTypes = {

}

export default Style
