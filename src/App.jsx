//utilities
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//pages
import Home from "./Pages/Home";
import People from "./Pages/People";
import Films from "./Pages/Films";
import Navbar from "./components/Navbar";

//components

const App = () =>{
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/people' element={<People />}/>
                <Route path='/films' element={<Films />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;