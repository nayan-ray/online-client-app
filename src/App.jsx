import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/homePage/Home';
import Dashboard from './pages/dashboardPgae/Dashboard';
import Unit from "./pages/unitPage/Unit"
import UnitDetails from "./pages/unitDetailsPage/UnitDetails"
import Note from "./pages/notePage/Note"
import Ques from "./pages/quesPage/Ques"
import Quiz from "./pages/quizPage/Quiz"
import ExamQuiz from "./pages/examQuizPage/ExamQuiz"
import Result from "./pages/resultPage/Result"
import Login from "./pages/loginPage/Login"
import SignUp from "./pages/signUpPage/SignUp"
import ActiveAccount from "./pages/activeAccountPage/ActiveAccount"
import NoPageFound from './pages/noPage/NoPageFound';
import Profile from './pages/profilePage/Profile';
import TakeEmail from './pages/takeEmailPage/TakeEmail';
import ResetPassword from './pages/ResetPasswordPage/ResetPassword';
import PublicRoutes from './routes/PublicRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';
import EditProfile from './pages/editProfilePage/EditProfile';



function App() {
  

  return (
    <>
    
      <Routes>
         <Route path='/' element={<Home />}/>
          <Route
             path="/login"
             element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
           }
          />

          <Route
             path="/register"
             element={
            <PublicRoutes>
              <SignUp />
            </PublicRoutes>
           }
          />

        

         <Route path='/dashboard' element={<ProtectedRoutes> <Dashboard /> </ProtectedRoutes>}/>
         <Route path='/dashboard/:subjName' element={<ProtectedRoutes> <Unit /></ProtectedRoutes>}/>
         <Route path='/dashboard/:subjName/:unitName' element={<ProtectedRoutes><UnitDetails /></ProtectedRoutes>}/>
         <Route path='/dashboard/:subjName/:unitName/note' element={<ProtectedRoutes><Note /></ProtectedRoutes>}/>
         <Route path='/dashboard/:subjName/:unitName/question' element={<ProtectedRoutes><Ques /></ProtectedRoutes>}/>
         <Route path='/dashboard/:subjName/:unitName/quiz' element={<ProtectedRoutes><Quiz /></ProtectedRoutes>}/>
         <Route path='/dashboard/:subjName/:unitName/exam' element={<ProtectedRoutes><ExamQuiz /></ProtectedRoutes>}/>
         <Route path='/profile' element={<ProtectedRoutes><Profile /></ProtectedRoutes>}/>
         <Route path='/edit-profile' element={<ProtectedRoutes><EditProfile /></ProtectedRoutes>}/>
         <Route path='/check-email' element={<TakeEmail />}/>
         <Route path='/reset-password/:token' element={<ResetPassword />}/>
         <Route path='/score' element={<ProtectedRoutes><Result /></ProtectedRoutes>}/>
        
         <Route path='/active-account/:token' element={<ActiveAccount />}/>
         <Route path='*' element={<NoPageFound />}/>
      </Routes>
        
    </>
  )
}

export default App
