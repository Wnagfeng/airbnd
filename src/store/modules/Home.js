import { gethomeGoodPriceInfo } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchHomeDateAction = createAsyncThunk("fetchdata", async () => {
    const res = await gethomeGoodPriceInfo()
    return res
})
const HomeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceinfo: {

        }
    },
    reducer: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceinfo = payload
        }
    },
    extraReducers: {
        [fetchHomeDateAction.fulfilled](state, { payload }) {
            state.goodPriceinfo = payload
        }
    }
})
export const { changeGoodPriceInfoAction } = HomeSlice.actions
export default HomeSlice.reducer