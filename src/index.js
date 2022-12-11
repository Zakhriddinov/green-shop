import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import './index.css'
import "antd/dist/antd";
const root = createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
      <Root />
   </BrowserRouter>
)