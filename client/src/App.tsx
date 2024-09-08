import './App.css';
import Navbartop from './components/navbar';
import Signin from './components/login';
import Library from './components/library';
import { Routes, Route } from "react-router-dom";
import { Login } from '@mui/icons-material';
// import SignIn from '/components/loggin';
//create API call and put through media card
//auth of bookstore



function App() {

  

  return (
   <>
    <Navbartop />
    <Routes>
     <Route path="/login" element={<Signin />} />
     <Route path='/library' element ={<Library />} />
   </Routes>
   </>
  )
}

export default App
