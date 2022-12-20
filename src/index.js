import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import './index.css'
import "antd/dist/antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux';
import { store } from './redux';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
   <QueryClientProvider client={queryClient}>
      <Provider store={store}>
         <BrowserRouter>
            <Root />
         </BrowserRouter>
      </Provider>
   </QueryClientProvider>
)