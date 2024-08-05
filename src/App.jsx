import React from 'react';
import MainPage from './pages/MainPage';
import { 
Route,
createBrowserRouter, 
createRoutesFromElements, 
RouterProvider
 } from 'react-router-dom';
import EpikPosaDiscordPage from './pages/EpikPosaDiscordPage';
import KennyPage from './pages/KennyPage';
import Auth from './components/Auth';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element = {<Auth/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='/server1' element={<EpikPosaDiscordPage/>}/>
      <Route path='/server2' element={<KennyPage/>}/>
    </Route>
)
);



const App = () => {
  return (
    <>
     <RouterProvider router={router}>
     </RouterProvider>  
    </>
     
  );
};

export default App;
