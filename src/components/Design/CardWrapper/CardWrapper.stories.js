import React from 'react'
import CardWrapper from './CardWrapper'

export default {
  title: 'Cards',
  component: CardWrapper,
}

const Content = () => <CardWrapper />

export const ContentWrapper = Content.bind({})
