import './App.css';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}>
      </Route>
      <Route exact path='/signup' element={<Signup/>}>
      </Route>
      <Route exact path='/login' element={<Signin/>}>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
