import React, { useContext, useEffect, } from 'react'
import "./ques.css"
import "../../assets/global.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import Accordion from '../../components/accordian/Accordian'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { questionApi } from '../../api/questionApi'
import Loader from '../../components/loader/Loader'

const Ques = () => {
   
   
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const { unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   
   
   
   

 useEffect(()=>{
   
      questionApi(setStudent, navigate, unitId, unitName);
     
    
  }, [setStudent, navigate, unitId, unitName])


 if(isLoading){
    return <Loader />
 }
  return (
    <div className="common-wrapper">
         <Header />
          <BreadCrumb />
   
       <h2 className='text-center mb-4'>Model Question</h2>
         <Accordion  allowMultiple={true}  />
         <Footer />
    </div>
  )
}

export default Ques