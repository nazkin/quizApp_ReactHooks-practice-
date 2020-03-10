import React from 'react'

/**
* @author
* @function Final
**/

const Final = (props) => { 
  let count = 0;
  props.correctVals.forEach((val, i)=> {
      if(val === props.answers[i]){
          count = count + 1;
      }
  })
  console.log(props.correctVals);
  console.log(props.answers)
  return(
    <div>
        <h1>THE END</h1>
        <h2>Your Score</h2>
        <h1>{count} of {props.correctVals.length}</h1>
   
    </div>
   )

 }

export default Final;