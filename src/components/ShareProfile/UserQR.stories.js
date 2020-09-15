import React from 'react'
import UserQR from './UserQR'

export default {
  title: 'UserQR',
  component: UserQR,
}

const Code = (args) => <UserQR {...args} />

export const QR = Code.bind({})
QR.args = {
    user: {
    version: '3.0',
    lastName: 'Mustermann',
    firstName: 'Max',
    organization: 'neuefische GmbH',
    workPhone: '040-123123123',
    workEmail: 'max.mustermann@beispiel.de',
    workUrl: 'https://neuefische.de/',

    workAddress: {
      label: 'Work Address',
      street: 'Gasstraße 6A',
      city: 'Hamburg',
      postalCode: '22761',
    },
    }
}