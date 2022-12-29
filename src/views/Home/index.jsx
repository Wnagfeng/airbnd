import { fetchHomeDateAction } from '@/store/modules/Home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-pns/Home-banner'
import { HomeWrapper } from './style'
import SectionHeader from "@/components/section-header/index"
import SectionRooms from '@/components/SectionRooms/index'

const Home = memo(() => {
  // 获取数据
  const { goodPriceInfo } = useSelector((state) => {
    return {

      goodPriceInfo: state.home.goodPriceinfo
    }
  }, shallowEqual)
 

  // 发请求

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDateAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className='content'>

        <div className='goodprice'>
          <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle} />
          <SectionRooms roomList={goodPriceInfo.list} />

        </div>

      </div>


    </HomeWrapper >
  )
})

export default Home
