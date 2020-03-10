import React, {useState} from 'react';
import Question from './components/Question';
import Answers from './components/Answers';
import Final from './components/Final';
import './App.css';

function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [answers, setAnswers]= useState([]);
  const [isEnded, setIsEnded] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("")
  const questions = [
    {
      id: 0,
      question: 'How many seasons are there?',
      a_one: '1',
      a_two: '12',
      a_three: '4',
      correct: ['C','4']
    },
    {
      id: 1,
      question: 'At what temperature does water boil?',
      a_one: '0 degree Celsius',
      a_two: '60 degree Celsius',
      a_three: '100 degree Celsius',
      correct: ['C','100 degree Celsius']
    },
    {
      id: 2,
      question: 'Name the country that is both to the south and North of Canada',
      a_one: 'Russia',
      a_two: 'USA',
      a_three: 'China',
      correct: ['B', 'USA']
    },
  ]
  //To simplify our life, extracted certain values from my data structure
  const correctArray = questions.map(val => {
    return val.correct[0];
  });
  //When a user slects a certain answer
  const selectAnswerHandler = (event)=> {
    event.preventDefault();
    setCurrentAnswer(event.target.value);
  }
  //When a user submits a certain answer
  const submitAnswer = (e)=> {
    e.preventDefault();
    
    console.log(questionNum);
    const arr = [...answers];
    arr.push(currentAnswer);
    setAnswers([...arr]);
    if(questionNum < questions.length -1){
      setQuestionNum(questionNum + 1);
    } else {
      setIsEnded(true);
    }
    
  }
  const restartHandler = ()=> {
    setQuestionNum(0);
    setAnswers([]);
    setIsEnded(false);
  }
//Tells us what to display depending on the status of the quiz
  let quizStatus = null;
  if(!isEnded){
    quizStatus = (<div> 
                    <h3>Question #{questions[questionNum].id + 1} of 3</h3>     
                    <Question question = {questions[questionNum].question}/>
                    <Answers answers = {questions[questionNum]} clicked={selectAnswerHandler}/>
                    <button onClick = {submitAnswer}>Submit</button>
                  </div>)
  }else if(isEnded){
    quizStatus = (
                  <div>
                    <Final answers={answers} correctVals={correctArray}/>
                    <button onClick={restartHandler}>Restart</button>
                  </div>)
  }
  return( 
    <div className="App">
      <div className="container">
      {quizStatus}
        
      </div>

    </div>
  );
}

export default App;
