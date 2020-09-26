import React from 'react'
import qrCode from 'qr-code-and-vcard/dist/QrCode'

export default function UserQR({ user }) {
  const {
    firstName,
    lastName,
    company,
    phone,
    mail,
    street,
    zip,
    city,
    url,
  } = user

  const contactCardInfo = {
    version: '3.0',
    lastName,
    firstName,
    organization: company,
    workPhone: phone,
    workEmail: mail,
    workUrl: url,

    workAddress: {
      label: 'Work Address',
      street: street,
      city: city,
      postalCode: zip,
    },
  }

  return <div dangerouslySetInnerHTML={{ __html: createQRCode() }} />
  function createQRCode() {
    return qrCode.createVCardQr(contactCardInfo, {
      typeNumber: 20,
      cellSize: 2,
      typeElement: 'createSvg',
    })
  }
}
