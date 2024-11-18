
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RepoDetails from '../components/RepoDetails';
import * as React from 'react';


// write routes in this file
const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/repos/:name",
      element: <RepoDetails />,
    },
  ]);

  export default router;
