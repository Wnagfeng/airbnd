import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomlistAction } from '@/store/modules/entire/createActions';
const EntirePagination = memo(function EntirePagination(props) {

  const { totalCount, roomList, currentPage } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList,
      currentPage: state.entire.currentPage
    }
  })
  // 计算一下开始和结束房源区间
  const startCount = currentPage * 20 + 1//开始页号等于 当前页面*20+1
  const endCount = (currentPage + 1) * 20
  // 计算总共有多少页
  const totalPage = Math.ceil(totalCount / 2);//Math.ceil能返回一个大于当前的数字

  const dispatch = useDispatch()
  function pageChangeHandle(page) {
     // 回到顶部
     window.scrollTo(0, 0)
    // page是你当亲点击的页数号
    // 在这里我们根据当前的页号去获取最新的数据
    dispatch(fetchRoomlistAction(page - 1))
    // console.log(page)

  }

  return (
    <EntirePaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination total={totalPage} showSizeChanger={false} onChange={pageChangeHandle} />
            <div className='desc'>
              第{startCount}-{endCount}个房源，总共{totalCount}+
            </div>
          </div>
        )
      }
    </EntirePaginationWrapper>
  )
})



export default EntirePagination
