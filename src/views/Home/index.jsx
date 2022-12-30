import { fetchHomeDateAction } from '@/store/modules/Home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-pns/Home-banner'
import { HomeWrapper } from './style'

import HomesectionV1 from './c-pns/Home-section-V1/index'

const Home = memo(() => {
  // 获取数据
  const { goodPriceInfo ,highscoreinfo} = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceinfo,
      highscoreinfo: state.home.highscoreinfo
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
          <HomesectionV1 infoData={goodPriceInfo} />
          <HomesectionV1 infoData={highscoreinfo} />
        </div>

      </div>


    </HomeWrapper >
  )
})

export default Home
