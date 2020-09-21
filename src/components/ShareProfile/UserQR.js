import React from 'react'
import qrCode from 'qr-code-and-vcard/dist/QrCode'
import styled from 'styled-components/macro'

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

  return <QRStyled dangerouslySetInnerHTML={{ __html: createQRCode() }} />
  function createQRCode() {
    return qrCode.createVCardQr(contactCardInfo, {
      typeNumber: 20,
      cellSize: 3,
      typeElement: 'createSvg',
    })
  }
}

const QRStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`
