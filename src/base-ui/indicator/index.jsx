import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'
import CompoundedSpace from 'antd/es/space';
const Indicator = memo(function Indicator(props) {
    const { currentindex=0 } = props;
    
    const elementRef = useRef()
    console.log(elementRef)
    useEffect(() => {
        // 在这里获取当前index对应的元素需要滚动的距离
        // 第一步先获取index对应的element 
        const countelement = elementRef.current.children[currentindex];
        const countelementOffectLeft = countelement.offsetLeft;//获取当前元素相对于左边定位父元素的偏移量
        const countelementWidtch = countelement.clientWidth//获取当前标签盒子的宽度
        const countWidth = elementRef.current.clientWidth;//获取一下当前容器盒子的宽度
        const contentScroll = elementRef.current.scrollWidth;  //整体宽度包括溢出隐藏的盒子


        // 当前盒子需要移动的偏移量等于=当前盒子相对于他左边的父元素的便宜量+自身宽度的一半-容器盒子的宽度的一半
        let distance = countelementOffectLeft + countelementWidtch * 0.5 - countWidth * 0.5//偏移量


        // 4.特殊情况的处理  如果是0的情况下我们不需要移动
        if (distance < 0) distance = 0 // 左边的特殊情况处理
        const totalDistance = contentScroll - countWidth//最多可移动距离
        if (distance > totalDistance) distance = totalDistance

        // 右边的情况是当右边的情况是我们需要判断一下最多能移动多少 如果移动多了会出现留白我们
        // 最多移动距离等于总共可移动距离减去容器宽度

        // 我们把偏移量设置回去
        elementRef.current.style.transform = `translate(${-distance}px)`
        console.log(countelementOffectLeft, countWidth, countelementWidtch)

    }, [currentindex])
    return (
        <IndicatorWrapper >
            <div className='i-count' ref={elementRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    currentindex: PropTypes.number

}

export default Indicator
