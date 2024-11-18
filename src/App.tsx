
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Suspense } from 'react';
import * as React from 'react';

/**
 *
 * header - header is global component
 * footer - footer is global component
 * RouterProvider is handle dynamic router available in router file
 */


const App = () => {
  return (
    <Suspense>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </Suspense>
  )
}

export default App