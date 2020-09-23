import React from 'react'
import WelcomeUser from '../components/HomePage/WelcomeUser'
import NavButton from '../components/HomePage/NavButton'
import TopLeftCard from '../components/Design/CardWrapper/TopLeftCard'
import HeaderHomepage from '../components/Header/HeaderHomepage'

export default function HomePage({ user }) {
  return (
    <>
      <HeaderHomepage />
      <TopLeftCard />
      <WelcomeUser user={user} />
      <NavButton />
    </>
  )
}
