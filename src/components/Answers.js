import React from 'react'

/**
* @author
* @function Answers
**/

const Answers = (props) => {
  return(
    <div className="container">
        <ul className="answers">
            <li><button className="select-btn" onClick={props.clicked} value='A'>A</button><h4 className="answer-text">{props.answers.a_one}</h4></li>
            <li><button className="select-btn" onClick={props.clicked} value='B'>B</button><h4 className="answer-text">{props.answers.a_two}</h4></li>
            <li><button className="select-btn" onClick={props.clicked} value='C'>C</button><h4 className="answer-text">{props.answers.a_three}</h4></li>
        </ul>
    </div>
   )

 }

export default Answers;