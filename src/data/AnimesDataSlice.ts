import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnimesDataState {
}

export const initialAnimesDataState: AnimesDataState = {
}

const animesDataSlice = createSlice({

    name: 'animes',

    initialState: initialAnimesDataState,

    reducers: {

    }
})

export const {
} = animesDataSlice.actions
  
export const animesDataReducer = animesDataSlice.reducer