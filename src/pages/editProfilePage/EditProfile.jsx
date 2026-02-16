import React, { useContext, useEffect } from 'react'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import "../signUpPage/signUp.css"
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../features/update/userUpdateSlice'
import { profileApi, updateApi } from '../../api/profileApi'
import { AuthContext } from '../../context/AuthenContex'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'

const EditProfile = () => {
  const user = useSelector((state) => state.profile.user);
  const userInfo = useSelector((state) => state.profile.updatedUser);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const dispatch= useDispatch();
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();

   useEffect(()=>{
     
        profileApi(setStudent, navigate, 'edit');
       
      
    }, [setStudent, navigate,profileApi])

    const editSubmit = (e)=>{
        e.preventDefault();
        updateApi(setStudent, userInfo, navigate)
    }


 if(isLoading){
    return <Loader />
 }

  return (
    <div className='dashboard-container'>
        <div className="dashboard-wrapper">
             <Header />
              <div className='sign-up-container edit-form'>
                 <div className="sign-up-wrapper">
                      <h2 className='sign-up-title'>Edit profile</h2>
                      <form className='sign-up-form' action="" onSubmit={editSubmit}>
                             <div className="form-group">
                                             <label htmlFor="user-name">
                                                Student Name : 
                                             </label>
                                             <input type="text" id='user-name' name='name' value={userInfo?.name || user?.name} onChange={(e) => dispatch(updateUser({field: e.target.name, value: e.target.value}))}/>
                              </div>

                              <div className="form-group">
                                             <label htmlFor="user-phone">
                                                phone: 
                                             </label>
                                             <input type="text" id='user-phone' name='phone' value={userInfo?.phone || user?.phone}  onChange={(e) => dispatch(updateUser({field: e.target.name, value: e.target.value}))}/>
                              </div>
                               <div className="form-group">
                                             <label htmlFor="user-address">
                                                phone: 
                                             </label>
                                             <input type="text" id='user-address' name='address' value={userInfo?.address || user?.address}  onChange={(e) => dispatch(updateUser({field: e.target.name, value: e.target.value}))}/>
                              </div>
                              <div className="update-profile">        
                                  <button type='submit' className='update-btn'>Update Profile</button>    
                              </div>
                      </form>
                 </div>
              </div>
             
        </div>
    </div>
  )
}

export default EditProfile