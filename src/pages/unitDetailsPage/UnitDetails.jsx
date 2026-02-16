import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { unitDetailsApi } from '../../api/unitDetailsApi'
import slugify from 'slugify'

const UnitDetails = () => {
   const [unitIdToState, setUnitIdToState]= useState(null)
   const unitDetails = useSelector((state) => state.unitDetail.unitDetails);
   const unitResults = useSelector((state) => state.unitDetail.unitResults);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const {subjName, unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   
   

 useEffect(()=>{
   
      unitDetailsApi(setStudent, navigate, unitId, unitName, setUnitIdToState);
     
    
  }, [setStudent, navigate, unitId, unitName,setUnitIdToState])


 if(isLoading){
    return <Loader />
 }

   return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
          <Header/>
          <BreadCrumb />
          <div>
            <h2 className='text-center mb-4'>Unit Details</h2>
            <ul className='text-center list'>
               {unitDetails[0]?.notes[0]?.totalNotes > 0 && !isLoading &&(
                  <li className='py-2 item'>
                     <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/note`} state={unitIdToState}>
                       <div className="details-wrapper">
                          <span className="unit-title">Note</span>
                          <span className='total-number'>{unitDetails[0].notes[0].totalNotes}</span>
                       </div>
                     </Link>
                     
                  </li>
               )}

              
               {unitDetails[0]?.questions[0]?.totalQuestions > 0 && !isLoading && (
                  <li className='py-2 item'>
                    <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/question`}state={unitIdToState}>
                       <div className="details-wrapper">
                        <span className="unit-title">Question</span>
                        <span className='total-number'>{unitDetails[0].questions[0].totalQuestions}</span>
                       </div>
                     </Link>
                  </li>
               )}

             {unitDetails[0]?.quizzes[0]?.totalQuizzes > 0 && !isLoading && (
                  <li className='py-2 item'>
                     <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/quiz`} state={unitIdToState}>
                        <div className="details-wrapper">
                          <span className="unit-title">Quiz</span>
                          <span className='total-number'>{unitDetails[0].quizzes[0].totalQuizzes}</span>
                        </div>
                     </Link>
                  </li>
               )}
              
               <li className='py-2 item'>
                     <Link to={`/dashboard/${slugify(subjName)}/${slugify(unitName)}/exam`} state={unitIdToState}>
                        <div className="details-wrapper">
                          <span className="unit-title text-center">{unitResults ? "Retest your knowledge" : "Take Exam"}</span>
                          <span className='total-number'>{unitResults ? `Score : ${unitResults?.correct}/${unitResults?.total}` : "No Score Yet"}</span>
                        </div>
                     </Link>
               </li>

            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
  )
}

export default UnitDetails