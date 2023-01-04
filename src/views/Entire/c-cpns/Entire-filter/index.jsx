import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(function EntireFilter(props) {
  const [selectItmes, setSelectItems] = useState([]);
  function itemClickHandle(item) {
    const newItems = [...selectItmes];
    if (newItems.includes(item)) {
      // 如果有而且你还点了说明你要取消高亮
      // 根据当前保存的item来获取对应的index在通过splice去截取一下就行
      const itemindex = newItems.findIndex(filterItem => filterItem === item);
      newItems.splice(itemindex, 1)
    } else {
      // 如果当前状态里没有那就是设置
      newItems.push(item)
    }
    setSelectItems(newItems)
    console.log(newItems)
  }
  return (
    <EntireFilterWrapper>
      <div className='filter'>
        {
          filterData.map((item) => {
            return (
              <div
                key={item}
                className={classNames("item", { active: selectItmes.includes(item) })} 
                onClick={(e) => {
                  itemClickHandle(item)
                }}
              >{item}</div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

EntireFilter.propTypes = {

}

export default EntireFilter
