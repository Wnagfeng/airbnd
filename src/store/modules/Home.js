import {
    getHomeDiscountDate,
    gethomeGoodPriceInfo,
    getHomeHighscoreDate,
    getHomeHotRecommenddest,
    getHomelongfor,
    getHomeplus
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
    getHomelongfor().then(
        response => {
            dispatch(changelongfor(response))
        }
    )
    getHomeplus().then(
        response => {
            dispatch(changePlus(response))
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
        longfor: {

        },
        plus: {

        }
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
        },
        changelongfor(state, { payload }) {
            state.longfor = payload
        },
        changePlus(state, { payload }) {
            state.plus = payload
        }
    }
})
export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommenddest,
    changelongfor,
    changePlus
} = HomeSlice.actions
export default HomeSlice.reducer