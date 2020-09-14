import React from 'react'
import ShareUserProfile from './ShareUserProfile'

export default {
  title: 'ShareUserProfile',
  component: ShareUserProfile,
}

const Code = (args) => <ShareUserProfile {...args} />

export const QR = Code.bind({})
QR.args = {
    userDataInfo: {}
}