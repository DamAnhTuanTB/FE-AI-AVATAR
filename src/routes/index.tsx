import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import NotFound from '@/pages/NotFound/NotFound';
import Login from '@/pages/Login/Login';
import GenerateAvatar from '@/pages/GenerateAvatar';
import GenerateAvatarLayout from '@/layouts/GenerateAvatarLayout';
import ListAvatar from '@/pages/ListAvatar';
import DetailAvatar from '@/pages/DetailAvatar';
import DetailAvatarWithStyle from '@/pages/DetailAvatarWithStyle';
import HomePage from '@/pages/HomePage';

export const router = createBrowserRouter([
  {
    element: <GenerateAvatarLayout />,
    children: [
      {
        path: ROUTES.APP_PAGE,
        element: <GenerateAvatar />,
      },
      {
        path: ROUTES.LIST_AVATAR,
        element: <ListAvatar />,
      },
      {
        path: ROUTES.DETAIL_AVATAR,
        element: <DetailAvatar />,
      },
      {
        path: ROUTES.DETAIL_AVATAR_WITH_STYLE,
        element: <DetailAvatarWithStyle />,
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
