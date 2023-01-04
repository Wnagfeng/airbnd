import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-pns/Home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDateAction } from '@/store/modules/Home'
import HomesectionV1 from './c-pns/Home-section-V1/index'
import HomesectionV2 from './c-pns/Home-section-V2'
import { isEmptyObject } from '@/utilis'
import HomeLongFor from './c-pns/Home-longfor/index'
import HomeSecttionV3 from './c-pns/Home-section-V3'


const Home = memo(() => {

  //#region 
  // 获取数据
  const {
    goodPriceInfo,
    highscoreinfo,
    discountinfo,
    hotrecommenddest,
    longfor,
    plus
  } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceinfo,
      highscoreinfo: state.home.highscoreinfo,
      discountinfo: state.home.discountinfo,
      hotrecommenddest: state.home.hotrecommenddest,
      longfor: state.home.longfor,
      plus: state.home.plus
    }
  }, shallowEqual)

  // 发请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDateAction())
  }, [dispatch])
  //#endregion

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/*isEmptyObject由于在第一次渲染的时候数据暂时还没有回来，我们在这里做一下性能优化，
        只有当数据真正回来的时候再去渲染我们的组件 */}

        {isEmptyObject(discountinfo) && <HomesectionV2 infodate={discountinfo} />}
        {isEmptyObject(hotrecommenddest) && <HomesectionV2 infodate={hotrecommenddest} />}

        {isEmptyObject(goodPriceInfo) && <HomesectionV1 infoData={goodPriceInfo} itemWidtch={"25%"} />}
        {isEmptyObject(highscoreinfo) && <HomesectionV1 infoData={highscoreinfo} itemWidtch={"25%"} />}

        {isEmptyObject(longfor) && <HomeLongFor infoData={longfor} />}
        {isEmptyObject(plus) && <HomeSecttionV3 infoData={plus} />}

      </div>
    </HomeWrapper >
  )
})

export default Home
