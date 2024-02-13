import "./App.css";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Cartprovider } from "./components/ContextReducer";

function App() {
  return (
    <Cartprovider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </Cartprovider>
  );
}

export default App;
