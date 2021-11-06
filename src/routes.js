import Practice from './pages/Practice';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '', element: <Practice /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> }
        ]
    }
];

export default routes;
