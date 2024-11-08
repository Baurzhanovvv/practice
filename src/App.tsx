import React from 'react';
import './App.css'
import Header from './components/header/header';
import { Route, Routes } from 'react-router';
import Hero from './components/hero/hero';
import Login from './components/login/login';
import Register from './components/register/register';
import Map from './components/lilypad/map';
import Course from './components/course/course';
import Teacher from './components/teacher/teacher';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Map width={500} height={500} />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/course" element={<Course />} />
                <Route path="/teacher" element={<Teacher />} />
            </Routes>
        </div>
    );
}

export default App;
