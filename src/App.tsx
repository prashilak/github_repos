
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Suspense } from 'react';
import ReactLoading from 'react-loading';

/**
 *
 * header - header is global component
 * footer - footer is global component
 * RouterProvider is handle dynamic router available in router file
 */


const App = () => {
  return (
    <Suspense fallback={<div className='fixed inset-0 flex items-center justify-center'><ReactLoading type={'spokes'} color={'#0EA5E9'} height={30} width={30} /> <span className='text-sm md:text-base ml-4'> Loading...</span></div>}>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </Suspense>
  )
}

export default App