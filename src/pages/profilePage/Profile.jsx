import React, { useContext, useEffect } from 'react'

import "../../assets/global.css"
import Header from '../../components/header/Header'
import { profileApi } from '../../api/profileApi'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthenContex'
import { useSelector } from 'react-redux'
import Loader from "../../components/loader/Loader"

const Profile = () => {

   const userInfo = useSelector((state) => state.profile.user);

   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   
   
   

 useEffect(()=>{
   
      profileApi(setStudent, navigate);
     
    
  }, [setStudent, navigate,profileApi])


 if(isLoading){
    return <Loader />
 }
  return (
    <div className='dashboard-container'>
       <div className="dashboard-wrapper">
           <Header />
           <div>
               <h2 className='text-center mb-4'>Student Profile</h2>
               <ul className="text-center list">
                {userInfo && !isLoading ?
                <>
                    <li className='py-2 item'>               
                       <div className="image-wrapper">
                           <img src={userInfo?.image || "#"} alt="profile image" />
                       </div>            
                  </li>
                  
                  <li className='py-2 item'>               
                       <div className="details-wrapper">
                          <span className="unit-title">Name</span>
                          <span className='total-number'>{userInfo.name}</span>
                       </div>            
                 </li>
                 <li className='py-2 item'>               
                       <div className="details-wrapper">
                          <span className="unit-title">Email</span>
                          <span className='total-number'>{userInfo?.email}</span>
                       </div>            
                 </li>
                  <li className='py-2 item'>               
                       <div className="details-wrapper">
                          <span className="unit-title">Class</span>
                          <span className='total-number'>{userInfo?.className}</span>
                       </div>            
                 </li>
                  <li className='py-2 item'>               
                       <div className="details-wrapper">
                          <span className="unit-title">Phone</span>
                          <span className='total-number'>{userInfo?.phone}</span>
                       </div>            
                 </li>
                  <li className='py-2 item'>               
                       <div className="details-wrapper">
                          <span className="unit-title">Address</span>
                          <span className='total-number'>{userInfo?.address}</span>
                       </div>            
                 </li>
                </> 
                :
                 <li>No profile data available</li>}

              
               </ul>

           </div>
           <div className="update-profile">
            <Link to="/edit-profile" className=''>
             <button className='update-btn'>Update Profile</button>
            </Link>
             
           </div>
       </div>
    </div>
  )
}

export default Profile