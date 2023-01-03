import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomelongWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongFor from '@/components/Long-for/index'
import ScrollView from '@/base-ui/scoll-View'
const HomeLongFor = memo(function HomeLongFor(props) {
  const { infoData } = props
  return (
    <HomelongWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='longfor-list '>
        <ScrollView>
          {
            infoData.list.map((item) => {
              return (< LongFor infoData={item}  key={item.city}/>)
            })
          }
        </ScrollView>
      </div>


    </HomelongWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor
