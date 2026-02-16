import axios from "axios"
import {store} from "../app/store"
import { hideLoader, showLoader } from "../features/loader/loaderSlice"

import { removeStudentLocal } from "../helper/auth"

import { setUnitDetails, setUnitResults } from "../features/unitDetails/unitDetailSlice"
import { baseURL } from "./baseUrl"


export const unitDetailsApi = async(setStudent, navigate, unitId, unitName, setUnitIdToState)=>{
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

        setUnitIdToState(unitDetailsId);
        const response = await axios.get(`${baseURL}/api/v1/unit/details/${unitDetailsId}`, {
             headers : {
                'Content-Type': 'application/json'
               },
             withCredentials : true
          })
          
        if(response.status === 200 && response.data.success){
            store.dispatch(setUnitDetails(response.data.payload))
           
            
        }
         
        const result = await axios.get(`${baseURL}/api/v1/exam-quiz/result-by-unit/${unitDetailsId}`, {
             headers : {
                'Content-Type': 'application/json'
               },
             withCredentials : true
          })
          
           if(result.status === 200 && result.data.success){
            store.dispatch(setUnitResults(result.data.payload))     
        }

        //result-by-unit/:id

              
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