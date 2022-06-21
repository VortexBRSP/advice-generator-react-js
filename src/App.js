import "./App.css";
import { BsFillDice5Fill } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <div className="container-generator">
        <span className="advice-title">ADVICE #11</span>
        <div className="container-advice">
          <span className="advice">
            Avoid mixing Ginger Nuts With other biscuits, ther contaminate. Keep
            separated.
          </span>
          <div className="barras">
            <div className="barra"></div>
            <div className="barra"></div>
          </div>
        </div>
        <div className="container-button">
          <button className="button">
            <BsFillDice5Fill size="40" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
