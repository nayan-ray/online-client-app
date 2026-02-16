import React, { useContext, useEffect } from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { unitApi } from '../../api/unitApi'
import Loader from '../../components/loader/Loader'
import {  Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthenContex'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import slugify from 'slugify'
import BreadCrumb from '../../components/breadCrumb/BreadCrumb'

const Unit = () => {
   const units = useSelector((state) => state.unit.units);
   const isLoading = useSelector((state) => state.loader.isLoading);
   const { setStudent} = useContext(AuthContext);
   const navigate = useNavigate();
   const {subjName} = useParams();
   const {state} = useLocation();
   const subjId = state || null;
   
   

 useEffect(()=>{
   
      unitApi(setStudent, navigate, subjId, subjName);
     
    
  }, [setStudent, navigate, subjId, subjName])


 if(isLoading){
    return <Loader />
 }
 

 

  return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
          <Header />
          <BreadCrumb />
          <div>
            <h2 className='text-center mb-4'>Units</h2>
            <ul className='text-center list'>
              {units.length > 0 && !isLoading && units.map((unit)=>{
                  return <li key={unit._id} className='py-2 item'><Link to={`/dashboard/${slugify(subjName, {lower : true})}/${slugify(unit.unitName, {lower : true})}`} state={unit._id}>{unit.unitName}</Link></li>
              })}
             {units.length === 0 && !isLoading && 
                  ( <li key="no-units" className='py-2 item'>No units available</li>)
              }
            </ul>
          </div>
          <Footer />
      </div>
       
    </div>
  )
}

export default Unit