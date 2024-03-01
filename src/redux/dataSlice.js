import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data,action.payload]
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt=>dt.id!=action.payload)]
    },
  },
})

// Action creators are generated for each case reducer function
export const {  createDataFunc,deleteDataFunc } = dataSlice.actions

export default dataSlice.reducer