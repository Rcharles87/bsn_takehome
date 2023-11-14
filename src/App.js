import { useState } from "react";
import "./App.css";
import Quiz from "./Components/AllQuizes/AllQuizes";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";
import Container from "./Components/Container/Container";
import NewQuiz from "./Components/NewQuiz/NewQuiz";
import NewBtn from "./Components/NavButtons/NewBtn";
import EditQuiz from "./Components/EditQuiz/EditQuiz";

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [newQuizSelected, setNewQuizSelected] = useState(false)
  const [editQuizSelected, setEditQuizSelected] = useState(false)


  const handleNewQuizBtn = () =>{
    setNewQuizSelected(true)
  }





  const renderContent = () => {
    if(loading){
      return <Loading/>
    }
    else if(error){
      return <Error error={error}/>
    } 
    else if(editQuizSelected){
      return <EditQuiz setEditQuizSelected={setEditQuizSelected}/>
    }
    else if(newQuizSelected){
      return <NewQuiz setNewQuizSelected={setNewQuizSelected}/>
    }
    else{
      return <Quiz setLoading={setLoading} setEditQuizSelected={setEditQuizSelected}/>
    }
  }

  return <div className="App">
    <Container center={Boolean(error || loading)} scroll={false}>
      <NewBtn handleNewQuizBtn={handleNewQuizBtn}/>
      {renderContent()}
    </Container>
    </div>;
}

export default App;
