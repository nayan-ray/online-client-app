import React from 'react'
import "../../assets/global.css"
import "./home.css"
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <>
     
        <div className="common-wrapper header-gap">
           <Header />
        </div>
        <div className='home-background'>
             <div className="text-section">
                <p className='main-text'>
                  It is online NCTB book's main theme realizing and problem practicing platform. Here all unit of subjects of classes from 6 to 10 are represented as notes, questions, quizzes shortly and clearly. Besides every unit has a quiz exam to test yourself. After completing all these thing , you will be able to realize main thing of every unit and solve the problems easily. It is the main goal here...
                </p>
             </div>
        </div>     
    </>
    
    
  )
}

export default Home