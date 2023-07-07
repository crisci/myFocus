import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Focus from './Focus';

function App() {
  return (
    <Router>
      <MainApp/>  
    </Router>
  );
}

function MainApp() {
  return(
    <Routes>
        <Route path='/' element={<Focus/>}/>
    </Routes>
  );
}

export default App;
