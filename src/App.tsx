import 'antd/dist/antd.min.css';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { injectStore } from './services/config/httpService';
import { store } from './store/store';
import ThemeWrapper from './theme';
import { router } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
// import { fetchToken, onMessageListener } from './firebase';

injectStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  // const [isTokenFound, setTokenFound] = useState(false);
  // const [token, setToken] = useState(null);
  // fetchToken(setTokenFound, setToken);
  // onMessageListener()
  //   .then((payload: any) => {
  //     console.log('noti', payload);
  //   })
  //   .catch((err) => console.log('failed: ', err));
  return (
    <ThemeWrapper>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer closeButton={false} />
      </QueryClientProvider>
    </ThemeWrapper>
  );
}

export default App;
