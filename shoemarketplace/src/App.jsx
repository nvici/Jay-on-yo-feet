import React from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';


const App = () => {
    return (<Router>
    
        <div>
            <h1>Shoe Marketplace</h1>
        <Routes>
      
        
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