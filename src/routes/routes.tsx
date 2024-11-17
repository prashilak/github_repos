
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RepoDetails from '../components/RepoDetails';

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
