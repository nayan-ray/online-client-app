import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"

import { removeStudentLocal } from "../helper/auth"
import { setUnits } from "../features/unit/unitSlice"
import { baseURL } from "./baseUrl"


export const unitApi = async(setStudent, navigate, subjId, subjName)=>{
    try {
        store.dispatch(showLoader())
        let subjectId = subjId;
        if(!subjectId){
             try {
                   const response = await axios.get(`${baseURL}/api/v1/subject/get-subj-id/${subjName}`, {
                headers : {
                   'Content-Type': 'application/json'
               },
                withCredentials : true
              })
                if(response.status === 200 && response.data.success){
                    subjectId = response.data.payload;
                }
             } catch (error) {
                  if(error.response?.status === 401){
                   setStudent(null);
                   removeStudentLocal();
                   navigate('/login', {replace : true})
                 }
                console.log(error.message);
             }
        }
        const response = await axios.get(`${baseURL}/api/v1/unit/subject/${subjectId}`, {
             headers : {
                'Content-Type': 'application/json'
               },
             withCredentials : true
          })
          
        if(response.status === 200 && response.data.success){
            store.dispatch(setUnits(response.data.payload))
           
            
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