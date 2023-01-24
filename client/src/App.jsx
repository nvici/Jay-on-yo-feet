import React from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
import Homepage from './components/Homepage';
const App = () => {
    return (<Router>
    
        <div>
        <Routes>
        <Route 
           path='/'
           element={<Homepage/>}/>

            <Route 
           path='/loginpage'
           element={<LoginPage/>}/>

           <Route 
           path='/signup'
           element={<SignUp/>}/>

            <Route 
            path='/checkout'
            element ={<Checkout/>}
            />
        
        </Routes>
        
        </div>
        </Router>
    );
}

export default App;