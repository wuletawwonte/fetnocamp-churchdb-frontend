import Practice from './pages/Practice';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import MemberList from './pages/MemberList';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '', element: <Practice /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> }
        ]
    },
    {
        path: 'user',
        element: <DashboardLayout />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'members', element: <MemberList /> }
        ]
    } 
];

export default routes;
