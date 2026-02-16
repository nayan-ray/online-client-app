import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"

import { removeStudentLocal } from "../helper/auth"



import { setResult } from "../features/result/resultSlice"
import { baseURL } from "./baseUrl"


export const resultApi = async(setStudent, navigate)=>{
    try {
        store.dispatch(showLoader())
        
        const response = await axios.get(`${baseURL}/api/v1/exam-quiz/result`, {
             headers : {
                'Content-Type': 'application/json'
               },
             withCredentials : true
          })
          
        if(response.status === 200 && response.data.success){
            store.dispatch(setResult(response.data.payload))
           
            
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