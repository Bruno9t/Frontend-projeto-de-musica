import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import {
  FiMusic,
  FiPlusCircle,
  FiPlay,
  FiUser,
  FiStar,
  FiAlignJustify,
  FiMoon,
  FiSun,
} from "react-icons/fi"
import {
  Container,
  MenuOptions,
  Option,
  ToggleTheme,
  LineBreak,
} from "./styles"

const Menu = () => {
  const { name, changeTheme } = useContext(ThemeContext)
  return (
    <Container>
      <ToggleTheme keyP={0} onClick={changeTheme}>
        {name === "dark" ? (
          <FiSun
            aria-label="Alterar Tema"
            title="Alterar para tema light"
            aria-describedby="Alterar Tema"
          />
        ) : (
          <FiMoon
            aria-label="Alterar Tema"
            title="Alterar para tema dark"
            aria-describedby="Alterar Tema"
          />
        )}
      </ToggleTheme>

      <LineBreak />
      <MenuOptions>
        <Option keyP={1}>
          <FiMusic
            aria-label="Minhas músicas"
            title="Minhas músicas"
            aria-describedby="Minhas músicas"
          />
        </Option>
        <Option keyP={2}>
          <FiPlusCircle
            aria-label="Adicionar música"
            title="Adicionar música"
            aria-describedby="Adicionar música"
          />
        </Option>
        <Option keyP={3}>
          <FiPlay
            aria-label="Mais Tocadas"
            title="Mais Tocadas"
            aria-describedby="Mais Tocadas"
          />
        </Option>
        <Option keyP={4}>
          <FiUser
            aria-label="Usuário"
            title="Informações do usuário"
            aria-describedby="Usuário"
          />
        </Option>
        <Option keyP={5}>
          <FiStar
            aria-label="Favoritas"
            title="Músicas Favoritas"
            aria-describedby="Favoritas"
          />
        </Option>
        <Option keyP={6}>
          <FiAlignJustify
            aria-label="Playlists"
            title="Playlists"
            aria-describedby="Playlists"
          />
        </Option>
      </MenuOptions>
    </Container>
  )
}

export default Menu
