
import { createBrowserRouter, RouterProvider } from 'react-router';
import Page404 from './../pages/404/ui/Page404';
import { PathConstants } from './constants/pathConstants';
import Layout from './layout/ui/Layout';
import Main from '../pages/main/ui/Main';
import Hubs from '../pages/hubs/ui/Hubs';
import Articles from '../pages/articles/ui/Articles';
import Authors from './../pages/authors/ui/Authors';
import Complaints from '../pages/complaints/ui/Complaints';
import Article from '../pages/article/ui/Article';
import Complaint from '../pages/complaint/ui/Complaint';

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
          },
          {
            path:PathConstants.ARTICLES,
            element:<Articles/>
          },{
            path:PathConstants.AUTHORS,
            element:<Authors/>
          },
          ,{
            path:PathConstants.COMPLAINTS,
            element:<Complaints/>
          },{
            path:`${PathConstants.ARTICLE}/:id/:status`,
            element:<Article/>
          },
          {
            path:`${PathConstants.COMPLAINT}/:id`,
            element:<Complaint/>
          }
        
        ],
      },
    ]);


  return <RouterProvider router={router} />;
}

export default App
