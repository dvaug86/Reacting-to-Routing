//utilities
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//pages
import Home from "./Pages/Home";
import People from "./Pages/People";
import PeopleDetails from "./Pages/PeopleDetails";
import Films from "./Pages/Films";
import FilmDetails from "./Pages/FilmDetails";
import Navbar from "./components/Navbar";

//components

const App = () =>{
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/people' element={<People />}/>
                <Route path='/people/:peopleid' element={<PeopleDetails />}/>
                <Route path='/films' element={<Films />}/>
                <Route path='/films/:filmsid' element={<FilmDetails />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;