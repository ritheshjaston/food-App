import './App.css';
import Home from './screens/Home';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
