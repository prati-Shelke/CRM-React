import './App.css';
import Registration from './Components/Registration'
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
