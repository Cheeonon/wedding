import Web from "./components/Web/Web";
import List from "./components/List/List";
import "./style/App.scss"
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Web />}></Route> 
          <Route path="/list" element={<List />}></Route> 
          <Route path="/login" element={<Login />}></Route> 
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
