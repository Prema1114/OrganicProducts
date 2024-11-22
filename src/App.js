import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavOne from './components/header/NavOne';
import NavTwo from './components/header/NavTwo';
import FarmersCorner from './components/Farmer Corner/FarmersCorner.jsx'




function App() {
  return (
    <div className="App">
      <NavOne/>
      <NavTwo/>
      <Routes>
        <Route path='/farmers-corner' element={<FarmersCorner/>} />
      </Routes>
      
      
      
      
       </div>
  );
}

export default App;
