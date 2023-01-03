import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Homesectionv3Wrapper } from './style'
import SectionHeader from '@/components/section-header'

import RoomItem from '@/components/room-item'
import SectionPlusView from '@/components/section-Plus/index'
const HomeSecttionV3 = memo(function HomeSecttionV3(props) {
    const { infoData } = props
    return (
        <Homesectionv3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className='roomlist'>
                <SectionPlusView>
                    {
                        infoData.list.map((item) => {
                            return (

                                <RoomItem itemData={item} itemWidtch="33.333%" key={item.id} />
                            )

                        })
                    }
                </SectionPlusView>

            </div>

        </Homesectionv3Wrapper>
    )
})

HomeSecttionV3.propTypes = {
    infoData: PropTypes.object
}

export default HomeSecttionV3
