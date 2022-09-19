import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar"

import HomePage from './pages/HomePage';
import HeadToHeadPage from './pages/HeadToHeadPage';
import PointBreakdownsPage from './pages/PointBreakdownsPage';
import TransfersPage from './pages/TransfersPage';
import ProgressionsPage from './pages/ProgressionsPage';

const App = () => {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/HeadToHead' element={<HeadToHeadPage/>} />
        <Route path='/PointBreakdowns' element={<PointBreakdownsPage/>} />
        <Route path='/Progressions' element={<ProgressionsPage/>} />
        <Route path='/Transfers' element={<TransfersPage/>} />
      </Routes>
    </Router>
  );
}

export default App;