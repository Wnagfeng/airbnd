import * as actiontypes from './constants'
const initialState = {
    currentPage: 3,//当前页号
    roomList: [],//房间列表
    totalCount: 0,//总数据个数
    isloading: false
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case actiontypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actiontypes.CHANGE_ROOM_LIST:
            return { ...state, roomList: action.roomList }
        case actiontypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actiontypes.CHANGE_IS_LOADING:
            return { ...state, isloading: action.isloading }
        default:
            return state
    }
}
export default reducer