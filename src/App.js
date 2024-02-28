import 'bootstrap/dist/css/bootstrap.min.css'; 
import './firebaseConfig.js'
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Focus from './Focus';
import { getFirestore } from 'firebase/firestore';



function App() {

  return (
    <Router>
      <MainApp/>  
    </Router>
  );
}

function MainApp() {

  const db = getFirestore();

  return(
    <Routes>
        <Route path='/' element={<Focus db={db}/>}/>
    </Routes>
  );
}

export default App;
