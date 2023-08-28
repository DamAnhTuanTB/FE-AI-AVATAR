import 'antd/dist/antd.min.css';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { injectStore } from './services/config/httpService';
import { store } from './store/store';
import ThemeWrapper from './theme';
import { router } from './routes';
import 'react-toastify/dist/ReactToastify.css';

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
