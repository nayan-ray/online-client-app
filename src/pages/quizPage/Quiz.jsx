import React, { useContext, useEffect, useState } from 'react'
import "../../assets/global.css"
import "./quiz.css"
import Header from '../../components/header/Header'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { quizApi } from '../../api/quizApi'
import Loader from '../../components/loader/Loader'

const Quiz = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
   const quizzes = useSelector((state) => state.quiz.quiz);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const { unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   const ansBox = ['A', 'B', 'C', 'D'];
 
  
 useEffect(()=>{
   
      quizApi(setStudent, navigate, unitId, unitName);
     
    
  }, [setStudent, navigate, unitId, unitName])

   const toggle = (index) => {
    setOpenIndexes((prev) => {
    
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      
    });
  };



 if(isLoading){
    return <Loader />
 }

  return (
    <div className='common-wrapper'>
       <Header />
       <BreadCrumb />
       
      <div>
            <h2 className='text-center mb-4'>Quiz</h2>
            <ul className="list-container">
              {
                quizzes.length > 0 && !isLoading && quizzes.map((item, index)=>{
                   const isOpen = openIndexes.includes(index);
                  return  <li className="numbering-gap" key={index}>
                      <div className="number-text">{index + 1}.</div>
                      <div className="body-content">
                        <p className="body-justify">{item?.quizTitle}</p>
                        <div className="option-box">
                           <button className='option-item '>A) {item?.quizOptionA}</button>
                           <button className='option-item'>B) {item?.quizOptionB}</button>
                           <button className='option-item'>C) {item?.quizOptionC}</button>
                           <button className='option-item'>D) {item?.quizOptionD}</button>
                        </div>
                         <div className="body-content">
            
            {/* Header */}
            <button
              className={`accordion-header  ${isOpen ? "active" : ""}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>Answer</span>
              
            </button>

            {/* Body */}
            <div
              className="accordion-body"
              style={{
                maxHeight: isOpen ? "1500px" : "0px",
                overflow: "hidden", transition: "max-height 0.5s ease" 
              }}
            >
              <div className="accordion-content text-center font-weight-bold">
                         {ansBox[item?.quizAnsIn]}
              </div>
            </div>

          </div>

           
      </div>
               
              </li>
                })
              }
              
        {quizzes.length === 0 && !isLoading && <li className='text-center'>No quizzes available</li> }
                
        </ul>
      </div> 

       <Footer />

    </div>
  )
}
export default Quiz;