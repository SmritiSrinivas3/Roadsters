import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <div className="App">
    
    <Routes>
            <Route path="/profile" element={<Profile />} />
            
          </Routes>
     
    </div>
  );
}

export default App;
