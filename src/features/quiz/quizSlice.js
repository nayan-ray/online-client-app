import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quiz: [],
}
export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz: (state, action) => {
        state.quiz = action.payload;
    },
    clearQuiz : (state) => {
        state.quiz = []
    }
 }
  
    
  
})

// Action creators are generated for each case reducer function
export const { setQuiz , clearQuiz} = quizSlice.actions

export default quizSlice.reducer