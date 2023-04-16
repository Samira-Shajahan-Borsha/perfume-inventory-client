import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='text-black'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster toastOptions={{
        style: {
          marginTop: '70px'
        },
      }} />
    </div>
  );
}

export default App;
