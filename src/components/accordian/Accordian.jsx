import React, { useState } from "react";
import "./accordian.css";
import "../../assets/global.css"
import { useSelector } from "react-redux";

const Accordion = ({  allowMultiple = false }) => {
  const questions = useSelector((state) => state.question.question);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const [openIndexes, setOpenIndexes] = useState([]);
   
   
  const toggle = (index) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        // multi-open mode
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        // single-open mode
        return prev[0] === index ? [] : [index];
      }
    });
  };

  return (
    <div className="list-container">


      { questions.length > 0 && !isLoading && questions.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (     
          <li className="numbering-gap" key={index}>
            <div className="number-text" >
               {`${index + 1})`}
            </div>
            <div className="body-content">
                      <p className="body-justify">{item?.quesTitle}</p>
                      <p className='body-justify'>{`A) ${item?.quesA}`}</p>
                      <p className='body-justify'>{`B) ${item?.quesB}`}</p>
                      <p className='body-justify'>{`C) ${item?.quesC}`}</p>
                      
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
              <div className="accordion-content">
                           <p className='body-justify'>Answer A : {item?.ansA}</p>
                            <p className='body-justify'>Answer B : {item?.ansB}</p>
                            <p className='body-justify'>Answer C : {item?.ansC}</p>
              </div>
            </div>

           </div>

          </div>
      </li>
     
        );
      })}

      {questions.length === 0 && !isLoading && <p className='text-center'>No questions available</p> }
      
    </div>
  );
};

export default Accordion;
