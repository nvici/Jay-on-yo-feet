import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
<<<<<<< HEAD
import SignUp from './components/SignUp';
import LoginPage from './components/LoginPage';
=======
import Homepage from './components/Homepage';


>>>>>>> feature/materialui

const App = () => {
    return (<Router>
    
        <div>
        <Routes>
<<<<<<< HEAD
            <Route 
           path='/loginpage'
           element={<LoginPage/>}/>
           <Route 
           path='/signup'
           element={<SignUp/>}/>
=======
            <Route
            path='/'
            element = {<Homepage/>}/>
        
>>>>>>> feature/materialui
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