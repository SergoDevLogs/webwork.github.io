import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from "react";

const Auth = lazy(()=> import("./pages/Auth/Auth.jsx"));
const MainLayout = lazy(()=> import("./components/MainLayout/MainLayout.jsx"));
const Stock = lazy(()=> import("./pages/Stock/Stock.jsx"));
const Orders = lazy(()=> import("./pages/Orders/Orders.jsx"));
const History = lazy(()=> import("./pages/History/History.jsx"));

function App() {
  return(
      <>
          <Router>
             <Suspense fallback={<div>Подожди ща</div>}>
                 <Routes>
                     <Route element={<MainLayout />}>
                         <Route path={"/orders"} element={<Orders/>}></Route>
                         <Route path={"/stock"} element={<Stock/>}></Route>
                         <Route path={"/history"} element={<History/>}></Route>
                     </Route>

                     <Route path={"/auth"} element={<Auth/>}></Route>
                 </Routes>
             </Suspense>
          </Router>
      </>
  )
}

export default App
