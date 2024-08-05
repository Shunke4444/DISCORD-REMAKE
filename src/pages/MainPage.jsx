import React from 'react'
import Sidebar from '../sidebar'
import FriendStatus from '../components/friendsStatus'
import FriendsTab from '../components/friends'
const MainPage = () => {
  return (
    <>
    <Sidebar/>
    <FriendsTab/>
    <FriendStatus/>
    </>
  )
}

export default MainPage
