
import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';


function AdminIndex() {
    return (
        <nav>
            <Link to="/">Home</Link> |
            <NavLink
                to="/dashboard"
                end
            >
                Dashboard
            </NavLink>
            <main>
                <Outlet />
            </main>
        </nav>
    );
}

export default AdminIndex;
