import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { EntireRoomswrapper } from './style'
import { fetchRoomlistAction } from '@/store/modules/entire/createActions'
import { useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo(function EntireRooms(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomlistAction());//这里派发的是一个函数 该函数里面有个函数作为返回值 所以他会立即执行
  }, [dispatch])

  const { roomList, totalCount ,isloading} = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isloading: state.entire.isloading
    }

  })

  return (
    <EntireRoomswrapper>
      <h2 className='title'>当前住所{totalCount}+</h2>
      <div className='list'>
        {
          roomList.map((item) => {
            return (
              <RoomItem 
              itemWidtch="20%" 
              itemData={item} 
              key={item._id} />
            )

          })
        }

      </div>
      {isloading && <div className='cover'></div>}
      
    </EntireRoomswrapper>
  )
})

EntireRooms.propTypes = {

}

export default EntireRooms
