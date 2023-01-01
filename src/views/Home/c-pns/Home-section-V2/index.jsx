import React, { memo, useState, useCallback } from 'react'

import PropTypes from 'prop-types'
import { Homesectionv2 } from './style'
import SectionHeader from '@/components/section-header/index'
import SectionRooms from '@/components/SectionRooms/index'
import SectionTabs from '@/components/section-Tabs'
import SectionFooter from '@/components/section-footer'
const HomesectionV2 = memo(function HomesectionV2(props) {
    const { infodate } = props
    const initialName = Object.keys(infodate.dest_list ?? {})[0] ?? ""
    const [activename, setactivename] = useState(initialName)
    const activetableName = useCallback((name) => {
        setactivename(name)
    })
    const tabnames = infodate.dest_address?.map(item => item.name)


    return (
        <Homesectionv2>
            <SectionHeader title={infodate.title} subtitle={infodate.subtitle} />
            <SectionTabs TabNames={tabnames} activetableName={activetableName} />
            <SectionRooms roomList={infodate.dest_list?.[activename]} itemWidtch={"33.3333%"} />
            <SectionFooter  name={activename} />

        </Homesectionv2>
    )
})
HomesectionV2.propTypes = {
    infodate: PropTypes.object
}
export default HomesectionV2
