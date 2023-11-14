import { useState } from "react";
import "./App.css";
import Quiz from "./Components/AllQuizes/AllQuizes";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";
import Container from "./Components/Container/Container";

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const renderContent = () => {
    if(loading){
      return <Loading/>
    }else if(error){
      return <Error error={error}/>
    }else{
      return <Quiz setLoading={setLoading}/>
    }
  }

  return <div className="App">
    <Container center={Boolean(error || loading)} scroll={false}>
      {renderContent()}
    </Container>
    </div>;
}

export default App;
