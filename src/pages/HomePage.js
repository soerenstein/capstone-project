import React from 'react'
import WelcomeUser from '../components/HomePage/WelcomeUser'
import NavButtons from '../components/HomePage/NavButtons'
import TopLeftCard from '../components/Design/CardWrapper/TopLeftCard'

export default function HomePage({ user }) {
  return (
    <>
      <TopLeftCard />
      <WelcomeUser user={user} />
      <NavButtons />
    </>
  )
}
