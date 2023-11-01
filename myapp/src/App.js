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
import Login from './component/author/Login';
import Register from './component/author/Register';
import Header2 from './component/header/Header2';
import SinglePage from './component/singlePage/SinglePage';
import SpecificStories from './component/specificStories/SpecificStories';

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
  {
    path: '/authorlogin',
    element: <Login/>
  },
  {
    path: '/authorregister',
    element: <Register/>
  },
  {
    path: '/:category/:specific/:title/',
    element: <SinglePage/>
  },
  {
    path: '/:storytype/:stories/',
    element: <SpecificStories/>
  },
  {
    path: '*',
    element: <div>Page Not Found</div>
  },
])

function App() {
  return (
    <Box className='relative' >
      <RouterProvider router={router}/>
    </Box>
  );
}

export default App;
