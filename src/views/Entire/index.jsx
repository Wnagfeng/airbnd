import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/Entire-filter'
import EntireRooms from './c-cpns/Entire-rooms'
import EntirePagination from './c-cpns/Entire-pagination'

const Entire = memo(function Entire(props) {
    return (
        <EntireWrapper>
            <EntireFilter />
            <EntireRooms />
            <EntirePagination />
        </EntireWrapper>
    )
})

Entire.propTypes = {

}

export default Entire
