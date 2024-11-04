
import React from 'react';
import './App.css'
import Header from './components/header/header';
import { Route, Routes } from 'react-router';
import Profile from './components/profile/profile';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
