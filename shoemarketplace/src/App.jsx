import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Homepage from './components/Homepage';



const App = () => {
    return (<Router>
    
        <div>
        <Routes>
            <Route
            path='/'
            element = {<Homepage/>}/>
        
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