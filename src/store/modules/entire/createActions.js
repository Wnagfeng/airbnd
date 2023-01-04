// 引入 发请求的方法
import { getEntireRoomList } from "@/services/modules/entire";

import * as actionTypes from './constants'
// 在这里我们主要是生成action对象用于派生出去

export const changeRoomListAction = (roomList) => {
    return {
        type: actionTypes.CHANGE_ROOM_LIST,
        roomList: roomList
    }
}

export const changecurrentPageAction = (currentPage) => {
    return {
        type: actionTypes.CHANGE_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const changetotalcountAction = (totalCount) => {
    return {
        type: actionTypes.CHANGE_TOTAL_COUNT,
        totalCount: totalCount
    }
}


export const changeisloading = (isloading) => {
    return {
        type: actionTypes.CHANGE_IS_LOADING,
        isloading: isloading
    }
}




// 这里写发请求的函数
export const fetchRoomlistAction = (page = 0) => {

    return async (dispatch, getState) => {
        // 修改页号
        dispatch(changecurrentPageAction(page))

        // 根据页号X20获取到我们需要的数据区间
        // const current = getState().entire.currentPage
        dispatch(changeisloading(true))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeisloading(false))
        // 获取数据
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changetotalcountAction(totalCount))
    }
}