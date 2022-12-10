import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './root';
import './index.css'
const root = createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
      <Root />
   </BrowserRouter>
)