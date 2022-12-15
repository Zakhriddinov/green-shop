import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import './index.css'
import "antd/dist/antd";
import { Provider } from 'react-redux';
import { store } from './redux';
const root = createRoot(document.getElementById("root"));

root.render(
   <Provider store={store}>
      <BrowserRouter>
         <Root />
      </BrowserRouter>
   </Provider>
)