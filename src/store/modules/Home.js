import { gethomeGoodPriceInfo, getHomeHighscoreDate } from "@/services";
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

})
const HomeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceinfo: {

        },
        highscoreinfo: {

        }
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceinfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highscoreinfo = payload
        },
    }
})
export const { changeGoodPriceInfoAction ,changeHighScoreInfoAction} = HomeSlice.actions
export default HomeSlice.reducer