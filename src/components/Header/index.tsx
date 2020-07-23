import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../assets/music.svg'
import note from '../../assets/note.svg'

import { Title, Container, LogoInfo, LoginInfo } from './styles'
import Menu from '../Menu'

const Header = () => {
  return (
    <Container>
      <Menu />
      <LogoInfo>
        <Title>
          <img src={logo} alt="" />
          iste
          <img src={note} alt="" />
        </Title>
      </LogoInfo>

      <LoginInfo>
        <div id="login">
          <a href="/">Entrar</a>
        </div>
        <div id="register">
          <a href="/">Registrar</a>
        </div>
      </LoginInfo>
    </Container>
  )
}

export default Header
