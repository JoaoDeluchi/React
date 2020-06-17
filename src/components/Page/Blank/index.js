import React from 'react'

import { Container } from './styles'

function Blank ({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export { Blank }