import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  question: [],
}
export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setQuestion: (state, action) => {
        state.question = action.payload;
    },
    clearQuestion : (state) => {
        state.question = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setQuestion , clearQuestion} = questionSlice.actions

export default questionSlice.reducer