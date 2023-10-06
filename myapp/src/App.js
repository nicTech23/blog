import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HomePage from './component/homePage/HomePage';
import { Box } from '@mui/material';
import News from './component/category/News/News';
import Sports from './component/category/Sports/Sports';
import Entertainment from './component/category/Entertainment/Entertainment';
import Business from './component/category/Business/Business';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/sports',
    element: <Sports/>
  },
  {
    path: '/news',
    element: <News/>
  },
  {
    path: '/business',
    element: <Business/>
  },
  {
    path: '/entertainment',
    element: <Entertainment/>
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
