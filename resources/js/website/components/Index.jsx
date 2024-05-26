import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AdminIndex from './admin/AdminIndex';
import Dashboard from './admin/Dashboard';
import Welcome from './admin/Welcome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminIndex />,
        children: [
            { index: true, element: <Welcome /> },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
        ],
    },
]);

function Index() {
    return <RouterProvider router={router} />;
}

export default Index;
