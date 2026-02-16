import React, { useContext, useEffect } from 'react'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'
import "../../assets/global.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./note.css"
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthenContex'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { noteApi } from '../../api/noteApi'
import Loader from '../../components/loader/Loader'

const Note = () => {
   
   const note = useSelector((state) => state.note.note);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const { unitName} = useParams();
   const {state} = useLocation();
   const unitId = state || null;
   

 useEffect(()=>{
   
      noteApi(setStudent, navigate, unitId, unitName);
     
    
  }, [setStudent, navigate, unitId, unitName])


 if(isLoading){
    return <Loader />
 }

  return (
    <div className="common-wrapper">
      <Header />
      <BreadCrumb />
      <div>
        <h2 className='text-center mb-4'>Notes</h2>
        <ul className="note-list">
          {note.length > 0 && !isLoading && note.map((item, index)=>{
             return <li key={index} className="note-item">
                      <div className='note-number'>{index + 1})</div>
                      <div className='note-body'>
                        <div className="body-top">{item.noteTitle}</div> 
                        <div className="body-bottom">{`Explanation : ${item.noteExplanation}`}</div>
                      </div>
                    </li>
          })}
           
          {note.length === 0 && !isLoading && <li className='text-center'>No notes available</li>}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Note