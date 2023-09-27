import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import NotFound from '@/pages/NotFound/NotFound';
import GenerateAvatar from '@/pages/GenerateAvatar';
import GenerateAvatarLayout from '@/layouts/GenerateAvatarLayout';
import ListAvatar from '@/pages/ListAvatar';
import DetailAvatar from '@/pages/DetailAvatar';
import DetailAvatarWithStyle from '@/pages/DetailAvatarWithStyle';
import HomePage from '@/pages/HomePage';
import SalePage from '@/pages/SalePage';
import MainLayout from '@/layouts/MainLayout';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyAndTermService/PrivacyPolicyPage';
import DetailOriginPhotos from '@/pages/DetailOriginPhotos';
import DetailGenerateAvatar from '@/pages/DetailGenerateAvatar';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
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
          {
            path: ROUTES.DETAIL_ORIGIN_PHOTOS,
            element: <DetailOriginPhotos />,
          },
          {
            path: ROUTES.DETAIL_GENERATE_AVATAR,
            element: <DetailGenerateAvatar />,
          },
        ],
      },
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.PARIVACY_POLICY,
        element: <PrivacyPolicyPage />,
      },
    ],
  },
  {
    path: ROUTES.SALE_PAGE,
    element: <SalePage />,
  },
  { path: ROUTES.ERROR, element: <NotFound /> },
]);
