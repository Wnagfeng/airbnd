import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollviewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
const ScrollView = memo(function ScrollView(props) {
    //定义是否显示下一个状态
    const [showLeft, setshowLeft] = useState(false);
    const [showRight, setshowRight] = useState(false);
    const [current, setcurrent] = useState(0)
    const totalDistanceRef = useRef()
    // 组渲染完毕判断是否展示右边按钮
    // 获取节点
    const scrollCountRef = useRef()
    useEffect(() => {
        // 获取全部区域
        const scrollWidth = scrollCountRef.current.scrollWidth;
        // 获取展示区域宽度
        const clientWidth = scrollCountRef.current.clientWidth;
        const totalDistance = scrollWidth - clientWidth//可移动的区域
        totalDistanceRef.current = totalDistance
        setshowRight(totalDistance > 0)
    }, [props.children])

    const controlClickHandle = (isRight) => {
        const newindex = isRight ? current - 1 : current + 1
        const newEl = scrollCountRef.current.children[newindex]//根据当前索引获取当前的元素
        const newoffsetLeft = newEl.offsetLeft//获取当前索引对应的标签的偏移量
        scrollCountRef.current.style.transform = `translate(-${newoffsetLeft}px)`
        setcurrent(newindex)//更新当前点击的索引

        // 是否继续显示右边按钮
        setshowLeft(newoffsetLeft > 0)
        // 当可移动的区域 足够下一次移动 则显示移动按钮 如果不成立则表示这一次移动不成立 可移动区域不够下一次移动了 
        setshowRight(totalDistanceRef.current > newoffsetLeft)
    }
    return (
        <ScrollviewWrapper>

            {showLeft && <div onClick={() => {
                controlClickHandle(true)
            }}
                className="control left"
            ><IconArrowLeft /></div>}

            <div className='scroll'>
                <div className='scroll-content' ref={scrollCountRef}>
                    {props.children}
                </div>
            </div>

            {showRight && <div onClick={() => {
                controlClickHandle(false)
            }}
                className="control right"
            ><IconArrowRight /></div>}

        </ScrollviewWrapper>
    )
})

ScrollView.propTypes = {

}

export default ScrollView
