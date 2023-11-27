import './App.css';
import SideNavBar from './components/Sidenav';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { Navigate } from 'react-router-dom';
function App() {
  return (

    <div className='webpage'>
          <Router>
      <SideNavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to ="/home"/>}/>
      </Routes>
    </Router>
    </div>



  );
}

export default App;
