import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
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
    </div>
  );
}

export default App;
