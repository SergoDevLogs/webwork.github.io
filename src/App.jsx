import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./pages/auth/Auth.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path={"/Auth"} element={<Auth/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
