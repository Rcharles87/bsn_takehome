import { useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz/Quiz";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";
import Container from "./Components/Container/Container";

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  return <div className="App">
    <Container center={Boolean(error || loading)} scroll={false}>
    hey world, hey!!!
    </Container>
    </div>;
}

export default App;
