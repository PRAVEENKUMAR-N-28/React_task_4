import { Link } from 'react-router-dom';
import './App.css';
import './Camponent/Css/Header.css';
import Home from './Camponent/Home';
import Place_to_visit from './Camponent/Place_to_visit';
import { Route, Routes } from 'react-router-dom';
import Time_to_visit from './Camponent/Time_to_visit/Time_to_visit';
import Food from './Camponent/Food/Food';
import Package from './Camponent/Packages_/Package';

function App() {
  return (
    <div>
      <header>
        <h2 className="logo">TAMILNADU TOURISAM</h2>
        <nav className='nav-link'>
            <Link to="/">Home</Link>
            <Link to="Place To Visit">Place To Visit</Link>
            <Link to="Best Time To Visit">Best Time To Visit</Link>
            <Link to="Package">Package</Link>
            
            <Link to="Food">Food</Link>
        </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='Place To Visit' element={<Place_to_visit />} /> 
      <Route path='Best Time To Visit' element={<Time_to_visit />} />
      <Route path='Package' element={<Package />} />
      <Route path='Food' element={<Food />} />
    </Routes>
    
    </div>
  );
}

export default App;
