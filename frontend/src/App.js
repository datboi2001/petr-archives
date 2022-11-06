import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Gallery from './components/Gallery.js';
import PetrForm from './components/PetrForm.js';
import React from 'react';

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Gallery />} />
                        <Route path="/submit" element={<PetrForm />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
