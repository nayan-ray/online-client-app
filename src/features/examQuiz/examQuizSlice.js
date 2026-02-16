import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  examQuiz: [],
}
export const examQuizSlice = createSlice({
  name: 'examQuiz',
  initialState,
  reducers: {
    setExamQuiz: (state, action) => {
        state.examQuiz = action.payload;
    },
    clearExamQuiz : (state) => {
        state.examQuiz = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setExamQuiz , clearExamQuiz} = examQuizSlice.actions

export default examQuizSlice.reducer