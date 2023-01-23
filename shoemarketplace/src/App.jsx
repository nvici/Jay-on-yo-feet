import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Album from './components/Album';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(() => ({

}));


const App = () => {
    return (<Router>
    
        <div>
        <Routes>
            <Route
            path='/'
            element = {<Album/>}/>
        
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