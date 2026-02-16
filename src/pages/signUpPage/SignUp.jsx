import React from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setStudent } from '../../features/signUp/signUpSlice'
import { authApi } from '../../api/signUpApi'

const SignUp = () => {
     const student = useSelector((state) => state.signup.student);
     const isLoading = useSelector((state)=> state.loader.isLoading);
     const dispatch = useDispatch();
    

     const handleSubmit = (e)=>{
         e.preventDefault();
         authApi(student);
     }
  return (
    <div className='sign-up-container'>
       <div className="sign-up-wrapper">
           <h2 className='sign-up-title'>Sign Up</h2>
           <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="user-name">
                   Student Name : 
                </label>
                <input type="text" id='user-name' name='name'  value={student?.name || ''} placeholder='Enter your name' required onChange={(e) => dispatch(setStudent({field: e.target.name, value: e.target.value}))} disabled={isLoading}/>
            </div>
            <div className="form-group">
                <label htmlFor="user-email">
                   email : 
                </label>
                <input type="email" id='user-email' name='email' value={student?.email || ''} placeholder='Enter your email' required onChange={(e)=> dispatch(setStudent({field : e.target.name, value : e.target.value}))} disabled={isLoading}/>
            </div>
            <div className="form-group">
                <label htmlFor="user-password">
                   password : 
                </label>
                <input type="password" id='user-password' name='password' value={student?.password || ''} placeholder='Enter your password' required onChange={(e) => dispatch(setStudent({field: e.target.name, value: e.target.value}))} disabled={isLoading}/>
            </div>
            <div className="form-group">
                <label htmlFor="user-address">
                   address : 
                </label>
                <input type="text" id='user-address' name='address' value={student?.address || ''} placeholder='Enter your address' required onChange={(e) => dispatch(setStudent({field: e.target.name, value: e.target.value}))} disabled={isLoading}/>
            </div>
            <div className="form-group">
                <label htmlFor="user-phone">
                   phone : 
                </label>
                <input type="text" id='user-phone' name='phone' value={student?.phone || ''} placeholder='Enter your phone' required onChange={(e) => dispatch(setStudent({field: e.target.name, value: e.target.value}))} disabled={isLoading}/>
            </div>
            <div className="form-group">
                <label htmlFor="user-class">
                   class : 
                </label>
                {/* dropdown for class */}
                <select className='dropdown-class'  id="user-class" name='classId' value={student?.classId || ''} required onChange={(e) => dispatch(setStudent({field: e.target.name, value: e.target.value}))} disabled={isLoading}>
                    <option value="">Select Class</option>
                    <option value="693f766e9d21b62514bf567a">Ten</option>
                    <option value="Eight">Eight</option> 
                    <option value="class3">Class 3</option>
                    <option value="class4">Class 4</option>
                    <option value="class5">Class 5</option>
                </select>
            </div>
           
            <button type="submit" disabled={isLoading}>Sign Up</button>
            <p>Already have an account? please <Link to={"/login"}>Login</Link></p>
           </form>
       </div>
    </div>
  )
}

export default SignUp