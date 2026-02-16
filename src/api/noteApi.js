import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"

import { removeStudentLocal } from "../helper/auth"


import { setNote } from "../features/note/noteSlice"
import { baseURL } from "./baseUrl"


export const noteApi = async(setStudent, navigate, unitId, unitName)=>{
    try {
        store.dispatch(showLoader())
        let unitDetailsId = unitId;
        if(!unitDetailsId){
             try {
                   const response = await axios.get(`${baseURL}/api/v1/unit/id-by-name/${unitName}`, {
                headers : {
                   'Content-Type': 'application/json'
               },
                withCredentials : true
              })
                if(response.status === 200 && response.data.success){
                    unitDetailsId = response.data.payload;
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

        const response = await axios.get(`${baseURL}/api/v1/note/notes-by-unit/${unitDetailsId}`, {
             headers : {
                'Content-Type': 'application/json'
               },
             withCredentials : true
          })
          
        if(response.status === 200 && response.data.success){
            store.dispatch(setNote(response.data.payload))
           
            
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