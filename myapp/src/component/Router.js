import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MostStories from './mostSories/MostStories'
import SinglePage from './singlePage/SinglePage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <MostStories/>
  },
  {
    path: '/single',
    element: <SinglePage/>
  },
])

export default router