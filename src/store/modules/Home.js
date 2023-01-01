import {
    getHomeDiscountDate,
    gethomeGoodPriceInfo,
    getHomeHighscoreDate,
    getHomeHotRecommenddest
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDateAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
    gethomeGoodPriceInfo().then(
        response => {
            dispatch(changeGoodPriceInfoAction(response))
        }
    )
    getHomeHighscoreDate().then(
        response => {
            dispatch(changeHighScoreInfoAction(response))
        }
    )
    getHomeDiscountDate().then(
        response => {
            dispatch(changeDiscountInfoAction(response))
        }
    )
    getHomeHotRecommenddest().then(
        response => {
            dispatch(changeHotRecommenddest(response))
        }
    )
})
const HomeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceinfo: {

        },
        highscoreinfo: {

        },
        discountinfo: {

        },
        hotrecommenddest: {

        },
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceinfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highscoreinfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountinfo = payload
        },
        changeHotRecommenddest(state, { payload }) {
            state.hotrecommenddest = payload
        }
    }
})
export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommenddest
} = HomeSlice.actions
export default HomeSlice.reducer