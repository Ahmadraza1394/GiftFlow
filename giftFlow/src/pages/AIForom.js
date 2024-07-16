import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { FormControlLabel, RadioGroup, Radio, FormControl ,TextareaAutosize} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import '../styles/Aiforom.css';
import { Grid, Snackbar, Alert } from '@mui/material';

import ProductCard from '../Product'
const questions = [
  {
    id: 0,
    title: "What is the age of the child?",
    options: [
      { value: "3-6", label: "3-6" },
      { value: "6-10", label: "6-10" },
      { value: "10-12 ", label: "10-12 " },
      { value: "12-16", label: "12-16" }
    ]
  },
  {
    "id": 1,
    "title": "What kinds of games does he like to play the most?",
    "options": [
      { value: "Board games", label: "Board games" },
      { value: "Outdoor games", label: "Outdoor games" },
      { value: "Technology games (such as game consoles or computer games)", label: "Technology games (such as game consoles or computer games)" },
      { value: "Puzzle building and challenge tests", label: "Puzzle building and challenge tests" }
    ]
  },
  {
    id: 2,
    title: "What are your child's favorite movies or series?",
    options: [
      { value: "Animated movies", label: "Animated movies" },
      { value: "Action series", label: "Action series" },
      { value: "Dramas", label: "Dramas" },
      { value: "Comedies", label: "Comedies" }
    ]
  },
  {
    id: 3,
    title: "How does he like to spend time during vacations or on weekends?",
    options: [
      { value: "Outdoor activities like hiking or sports", label: "Outdoor activities like hiking or sports" },
      { value: "Arts and crafts", label: "Arts and crafts" },
      { value: "Indoor games and activities", label: "Indoor games and activities" },
      { value: "Watching movies or TV series at home", label: "Watching movies or TV series at home" }
    ]
  },
  {
    id: 4,
    title: "What types of books does he like to read?",
    options: [
      { value: "Fantasy", label: "Fantasy" },
      { value: "Science fiction", label: "Science fiction" },
      { value: "Thriller and adventure books", label: "Thriller and adventure books" },
      { value: "Educational and mentoring books", label: "Educational and mentoring books" }
    ]
  },
  {
    id: 5,
    title: "Is there something important for us to know?",
    options: []
  },
//   {
//     id: 5,
//     title: "מהם הדמויות או הגיבורים שהוא הכי אוהב? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "גיבורי על", label: "גיבורי על" },
//       { value: "דמויות אנימציה", label: "דמויות אנימציה" },
//       { value: "דמויות היסטוריות", label: "דמויות היסטוריות" },
//       { value: "דמויות קומיקס", label: "דמויות קומיקס" }
//     ]
//   },
//   {
//     id: 6,
//     title: "מהם המשחקים או הצעצועים שהוא הכי מחכה לקבל? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "צעצועי מותג מסוים (לדוגמה, LEGO או Barbie)", label: "צעצועי מותג מסוים (לדוגמה, LEGO או Barbie)" },
//       { value: "צעצועי בנייה ויצירה", label: "צעצועי בנייה ויצירה" },
//       { value: "צעצועים חדשניים טכנולוגיים", label: "צעצועים חדשניים טכנולוגיים" },
//       { value: "כלי נגינה או צעצועים מוזיקליים", label: "כלי נגינה או צעצועים מוזיקליים" }
//     ]
//   },
//   {
//     id: 7,
//     title: "איזו סוגת מוסיקה היא האהובה על ילדך? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "רוק או פופ", label: "רוק או פופ" },
//       { value: "קלאסי או ג'אז", label: "קלאסי או ג'אז" },
//       { value: "ראפ או R&B", label: "ראפ או R&B" },
//       { value: "מוסיקה ישראלית או עממית", label: "מוסיקה ישראלית או עממית" },
//       { value: "לא רלוונטי", label: "לא רלוונטי" }
//     ]
//   },
//   {
//     id: 8,
//     title: "מה הם הצבעים הכי אהובים עליו? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "אדום", label: "אדום" },
//       { value: "כחול", label: "כחול" },
//       { value: "ירוק", label: "ירוק" },
//       { value: "צהוב", label: "צהוב" }
//     ]
//   },
//   {
//     id: 9,
//     title: "אילו פעילויות הן הכי משמחות אותו לעשות? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "בישול ואפייה", label: "בישול ואפייה" },
//       { value: "ביצוע אומנותית", label: "ביצוע אומנותית" },
//       { value: "שחקנות והצגות", label: "שחקנות והצגות" },
//       { value: "ספורט ופעילויות חוץ", label: "ספורט ופעילויות חוץ" }
//     ]
//   },
//   {
//     id: 10,
//     title: "אילו חיות הן הכי אהובות על ילדך? בחר את כל האפשרויות המתאימות:",
//     options: [
//       { value: "כלבים", label: "כלבים" },
//       { value: "חתולים", label: "חתולים" },
//       { value: "דגים ומעיים", label: "דגים ומעיים" },
//       { value: "צפרדעים וברכישים", label: "צפרדעים וברכישים" }
//     ]
//   }
];





function SurveyForm() {
  const myProducts = [
    { id: 1, name: 'Lego Package', description: 'This is product 1', image: 'https://www.lego.com/cdn/cs/set/assets/blt61f68cd89d49cc06/11029_alt1.png'},
    { id: 2, name: 'Chess', description: 'This is product 2', image: 'https://5.imimg.com/data5/PG/LD/CL/SELLER-14274915/magnetic-chess-game.jpg' },
    { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://m.media-amazon.com/images/I/71x1TrqgSmL._AC_UF894,1000_QL80_.jpg'},
  ];
  const [step, setStep] = useState(-1); // State to track current step/question
  const [answeredCount, setAnsweredCount] = useState(0); // State to track answered questions count
  const [isFinished, setIsFinished] = useState(false); // State to track if the survey is finished

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(prevStep => prevStep + 1);
      setAnsweredCount(prevCount => prevCount + 1); // Increment answered count
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
      setAnsweredCount(prevCount => prevCount - 1); // Decrement answered count
    }
  };

  const handleFinish = () => {
    setIsFinished(true); // Mark the survey as finished
  };

  return (
    <div className="container">
      <div className="home-content text-center mb-5">
        <div className="card-body">
          <div className="survey-content">
            {isFinished ? (
               <div className="container">
        
      <h1>According to your answers, we suggest you to buy:</h1>
      <div className="card-body">
      <Grid style={{backgroundColor:'transparent'}} container spacing={3}>
            {myProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
         
              />
            ))}
          </Grid>
       
        </div>
              </div>
            ) : (
              step === -1 ? (
                <div className="container text-center">
                <h1>Let's find the perfect gift for the child we're looking for</h1>
                <p>We will present you with 6 questions that you must answer so that artificial intelligence can assist you well.</p>
                <p>Sound good to you?</p>
                <Button variant="primary" onClick={handleNext}>Let's get started</Button>

                </div>
              ) : (
                <div className="container text-center" id="questions">
                  <ProgressBar striped variant="info" now={answeredCount} max={questions.length} label={`${answeredCount} from ${questions.length} questions`} className="mb-3" />
                  <div className="container text-center" id="questions">
                    <h3>{questions[step].title}</h3>
                    <FormControl component="fieldset" className="question-container">
                      {questions[step].options.length > 0 ? (
                        <RadioGroup name={`question-${questions[step].id}`} className="options-group">
                          {questions[step].options.map(option => (
                            <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                          ))}
                        </RadioGroup>
                      ) : (
                        <Textarea
                          color="primary"
                          disabled={false}
                          minRows={7}
                          size="lg"
                          variant="outlined"
                        />
                      )}
                    </FormControl>
                    <div className="mt-4 d-flex justify-content-between">
                      {step >= 0 && (
                        <Button variant="secondary" id="btn" onClick={handlePrev}>
                          <BsArrowRight />
                        </Button>
                      )}
                      {step < questions.length - 1 ? (
                        <Button variant="primary" id="btn" onClick={handleNext}>
                          <BsArrowLeft />
                        </Button>
                      ) : (
                        <Button variant="success" id="btn" onClick={handleFinish}>Finish</Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyForm;
