import "./App.css";
import { BsAppIndicator, BsFillDice5Fill } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";

function App() {
  const [adviceID, setAdviceID] = useState();
  const [advice, setAdvice] = useState();
  async function handleClick() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdviceID("ADVICE #" + response.data.slip.id);
      setAdvice(response.data.slip.advice);
    } catch {
      alert("[ERRO]");
    }
  }
  handleClick();
  return (
    <div className="App">
      <div className="container-generator">
        <span className="advice-title">{adviceID}</span>
        <div className="container-advice">
          <span className="advice">{advice}</span>
          <div className="barras">
            <div className="barra"></div>
            <div className="barra"></div>
          </div>
        </div>
        <div className="container-button">
          <button className="button" onClick={handleClick}>
            <BsFillDice5Fill size="40" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
