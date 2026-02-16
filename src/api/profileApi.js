import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"
import { removeStudentLocal } from "../helper/auth"
import { setUpdatedUser, setUser } from "../features/update/userUpdateSlice"
import { baseURL } from "./baseUrl"


export const profileApi = async(setStudent, navigate, text)=>{
    try {
        store.dispatch(showLoader())

        const response = await axios.get(`${baseURL}/api/v1/student/info`, {
             headers : {
                'Content-Type': 'application/json'
               },
             withCredentials : true
          })
          
        if(response.status === 200 && response.data.success){
          
                
            
               store.dispatch(setUser(response.data.payload))
          
            
           
           
        }
              
    } catch (error) {
        if(error.response?.status === 401){
            setStudent(null);
            removeStudentLocal();
            navigate('/login', {replace : true})
        }
     
        console.log(error.message);
        
       
    }finally{
        store.dispatch(hideLoader())
    }
   
}

export const updateApi = async(setStudent, student, navigate)=>{
    try {
        store.dispatch(showLoader())
       const response =  await axios.put(`${baseURL}/api/v1/student/update`, student, {
            headers : {
                'Content-Type': 'application/json'
           },
            withCredentials : true
        })

        if(response.status === 200 && response.data.success){
             alert("Student's info updated successfully. ")
             navigate('/profile', {replace : true})
            }
       
    } catch (error) {
         if(error.response?.status === 401){
            setStudent(null);
            removeStudentLocal();
            navigate('/login', {replace : true})
        }
     
        console.log(error.message);
           
    }finally{
        store.dispatch(hideLoader())
    }
   
}