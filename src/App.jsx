import React from 'react';
import Sidebar from './sidebar';
import FriendsTab from './friends';
import FriendStatus from './friendsStatus';

const App = () => {
  return (
    <section className='bg-gray-1000 w-screen h-screen font-sans flex overflow-hidden'>
      <Sidebar></Sidebar>   
      <FriendsTab></FriendsTab>
      <FriendStatus/>
    </section>
  );
};

export default App;
