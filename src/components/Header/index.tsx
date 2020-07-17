import React from 'react'
import { Container, MenuOptions, Option } from './styles'

const Header = () => {
  return (
    <Container>
      <MenuOptions>
        <Option keyP={1}>
          <figure>+</figure>
        </Option>
        <Option keyP={2}>
          <figure>o</figure>
        </Option>
        <Option keyP={3}>
          <figure>()</figure>
        </Option>
        <Option keyP={4}>
          <figure>$</figure>
        </Option>
        <Option keyP={5}>
          <figure>()</figure>
        </Option>
        <Option keyP={6}>
          <figure>$</figure>
        </Option>
      </MenuOptions>
    </Container>
  )
}

export default Header
