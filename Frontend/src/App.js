// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Calculator from './Calculator';
import About from './About';
import Contact from './Contact';
import Help from './Help';
import { useState,useEffect } from 'react';
import { RingLoader} from 'react-spinners';
import Profile from "./Profile";
import Navbar from "./Navbar";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
// import { selectUser } from "./features/userSlice";
// import {useSelector} from 'react-redux'
import Logout from '../src/Logout';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  // const user =useSelector(selectUser);

//   const[loading,setloading]=useState(true)
// useEffect(()=>{
//   setTimeout(()=>
//   {
//     setloading(false)
//   },400);
// })
  return (
   <div>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/reg" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/calci" element={<Calculator/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route  path="/adduser" element={<AddUser />} />
          <Route  path="/edituser/:id" element={<EditUser />} />
          <Route  path="/viewuser/:id" element={<ViewUser />} />
       </Routes>
       </PersistGate>
       </Provider>

    </BrowserRouter>
    </div>
  );
}

export default App;

 // <div style={{alignContent:'center',alignItems:'center'}}>
    // <BrowserRouter>
    //    {loading?<RingLoader
    //     color="blue"
    //     loading={true}  
    //     size={90}
    //   />: