import { configureStore } from '@reduxjs/toolkit'
import  signUpSliceReducer  from '../features/signUp/signUpSlice'
import loaderReducer from "../features/loader/loaderSlice"
import loginReducer from "../features/login/loginSlice"
import dashboardReducer from "../features/dashboard/dashboardSlice"
import unitReducer from "../features/unit/unitSlice"
import unitDetailsReducer from '../features/unitDetails/unitDetailSlice'
import noteReducer from "../features/note/noteSlice"
import questionReducer from "../features/question/questionSlice"
import quizReducer from "../features/quiz/quizSlice"
import examQuizReducer from "../features/examQuiz/examQuizSlice"
import testQuizReducer from "../features/testQuiz/testQuizSlice"
import resultReducer from "../features/result/resultSlice"
import profileReducer from "../features/update/userUpdateSlice"

export const store = configureStore({
  reducer: {
    signup: signUpSliceReducer,
    loader : loaderReducer,
    login : loginReducer,
    dashboard : dashboardReducer,
    unit : unitReducer,
    unitDetail : unitDetailsReducer,
    note : noteReducer,
    question : questionReducer,
    quiz : quizReducer,
    examQuiz : examQuizReducer,
    testQuiz : testQuizReducer,
    result : resultReducer,
    profile : profileReducer
  },
})