import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Callculator from "./kalkultor/ParentCal";
import DataKaryawan from "./datatabel/parentData";
import Login from "./formLogin/LoginForm";

const Path = ()=>{
    return(
    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>}/>  
        <Route path="/calculator" element={<Callculator/>}/>
        <Route path="/tabel" element={<DataKaryawan/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Path