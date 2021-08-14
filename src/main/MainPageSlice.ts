import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainPageState {
}

export const initialMainPageState: MainPageState = {
}

const mainPageSlice = createSlice({

    name: 'mainPage',

    initialState: initialMainPageState,

    reducers: {

    }
})

export const {
} = mainPageSlice.actions
  
export const mainPageReducer = mainPageSlice.reducer