import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./pages/Auth/Auth.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Stock from "./pages/Stock/Stock.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import History from "./pages/History/History.jsx";

function App() {
  return(
      <>
          <Router>
              <Routes>
                  <Route element={<MainLayout />}>
                      <Route path={"/orders"} element={<Orders/>}></Route>
                      <Route path={"/stock"} element={<Stock/>}></Route>
                      <Route path={"/history"} element={<History/>}></Route>
                  </Route>

                  <Route path={"/auth"} element={<Auth/>}></Route>
              </Routes>
          </Router>
      </>
  )
}

export default App
