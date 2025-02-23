
import { createBrowserRouter, RouterProvider } from 'react-router';
import Page404 from './../pages/404/ui/Page404';
import { PathConstants } from './constants/pathConstants';
import Layout from './layout/ui/Layout';
import Main from '../pages/main/ui/Main';
import Hubs from '../pages/hubs/ui/Hubs';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
    
      children: [
        {
          path: PathConstants.HOME,
          element: <Main />,
        },
        {
          path: PathConstants.HUBS,
          element: <Hubs />,
        }
      
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App
