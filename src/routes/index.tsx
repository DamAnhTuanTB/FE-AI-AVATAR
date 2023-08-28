import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  { path: ROUTES.ERROR, element: <NotFound /> },
]);
