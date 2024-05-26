// require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './components/Index';
import Login from './components/login';


function App() {
    return (
        <div>
            <Login />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<Index />);
