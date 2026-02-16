import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  result: [],
}
export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action) => {
        state.result = action.payload;
    },
    clearResult : (state) => {
        state.result = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setResult , clearResult} = resultSlice.actions

export default resultSlice.reducer