import React from 'react'
import './App.css'
import CreateAccount from './pages/CreateAccount'
import FollowNow from './pages/FollowNow'
import Users from './pages/Users'

export default function App() {
  return (
    <>
      <CreateAccount />
      <FollowNow />
      <Users />
    </>
  )
}
