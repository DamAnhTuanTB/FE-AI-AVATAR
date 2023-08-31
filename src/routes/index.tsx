import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
import GenerateAvatar from '@/pages/GenerateAvatar';
import GenerateAvatarLayout from '@/layouts/DefaultLayout';

export const router = createBrowserRouter([
  {
    element: <GenerateAvatarLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <GenerateAvatar />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  { path: ROUTES.ERROR, element: <NotFound /> },
]);
