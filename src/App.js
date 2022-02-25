import './App.css';
import ForgotPassword from './Components/ForgotPassword'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
