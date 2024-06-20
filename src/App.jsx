import React from 'react';
import Sidebar from './sidebar';
import MiniNavBar from './mininavbar';
import FriendsTab from './friends';

const App = () => {
  return (
    <section className='bg-gray-1000 w-screen h-screen font-sans flex overflow-hidden'>
      <Sidebar></Sidebar>   
      <MiniNavBar></MiniNavBar>
      <FriendsTab></FriendsTab>


    </section>
  );
};

export default App;
