import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./pages/Auth/Auth.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Orders from "./pages/Orders/Orders.jsx";

function App() {
  return(
      <>
          <Router>
              <Routes>
                  <Route element={<MainLayout />}>
                      <Route path="/" element={<HomePage/>}></Route>
                      <Route path={"/orders"} element={<Orders/>}></Route>
                  </Route>

                  <Route path={"/auth"} element={<Auth/>}></Route>
              </Routes>
          </Router>
      </>
  )
}

export default App
