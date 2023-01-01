import { memo } from "react";
import HomeSectionV1Wrapper from './style'
import PropTypes from 'prop-types'
import SectionHeader from "@/components/section-header/index"
import SectionRooms from '@/components/SectionRooms/index'
import SectionFooter from "@/components/section-footer";
const HomesectionV1 = memo((props) => {
    const { infoData, itemWidtch } = props
    return (
        <HomeSectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionRooms roomList={infoData.list} itemWidtch={itemWidtch} />
            <SectionFooter />

        </HomeSectionV1Wrapper>
    )
})

HomesectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomesectionV1