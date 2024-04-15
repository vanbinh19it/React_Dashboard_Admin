import logo from "./logo.svg";
import "./App.css";
import NewDesign from "./Components/NewDesign";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NewDesign />
      </div>
    </BrowserRouter>
  );
}

export default App;
