import React from "react"

import { FiUser, FiMail, FiUsers, FiCalendar, FiLock } from "react-icons/fi"
import backMusic from "../../assets/listen-music.svg"
import { Container } from "./styles"

import Input from "../../components/Input"

const SignUp = () => {
  return (
    <>
      <Container>
        <div id="image">
          <img src={backMusic} alt="Background music" />
        </div>
        <div id="form">
          <div>
            <h1>Bem vindo!</h1>
          </div>
          <form action="">
            <div id="group-name">
              <Input
                name="name"
                icon={FiUsers}
                type="text"
                labelName="Nome"
                autoFocus
              />
              <Input
                name="surname"
                icon={undefined}
                type="text"
                labelName="Sobrenome"
              />
            </div>
            <Input
              name="user"
              icon={FiUser}
              type="text"
              labelName="Nome de usuário"
            />
            <Input name="email" icon={FiMail} type="email" labelName="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              labelName="Senha"
            />
          </form>
        </div>
      </Container>
    </>
  )
}

export default SignUp
