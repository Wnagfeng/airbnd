import { memo } from "react";
import HomeSectionV1Wrapper from './style'
import PropTypes from 'prop-types'
import SectionHeader from "@/components/section-header/index"
import SectionRooms from '@/components/SectionRooms/index'
const HomesectionV1 = memo((props) => {
    const { infoData } = props
    return (
        <HomeSectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionRooms roomList={infoData.list} />
        </HomeSectionV1Wrapper>
    )
})

HomesectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomesectionV1