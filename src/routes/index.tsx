import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
import GenerateAvatar from '@/pages/GenerateAvatar';
import GenerateAvatarLayout from '@/layouts/GenerateAvatarLayout';
import HomePage from '@/pages/HomePage';

export const router = createBrowserRouter([
  {
    element: <GenerateAvatarLayout />,
    children: [
      {
        path: ROUTES.APP_PAGE,
        element: <GenerateAvatar />,
      },
    ],
  },
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  { path: ROUTES.ERROR, element: <NotFound /> },
]);
