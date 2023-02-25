import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Textbox from "./components/textbox";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
    <div>
      <Textbox />
    </div>
    </div>
  );
}

export default App;
