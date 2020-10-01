import React from 'react'
import WelcomeUser from './WelcomeUser'
import NavButtons from './NavButtons'
import TopLeftCard from '../Design/CardWrapper/TopLeftCard'

export default function HomePage({ user }) {
  return (
    <>
      <TopLeftCard />
      <WelcomeUser user={user} />
      <NavButtons />
    </>
  )
}
