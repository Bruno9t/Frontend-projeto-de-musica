import React from "react"
import { Link } from "react-router-dom"

import Header from "../../components/Header"
import { Container } from "./styles"

import musicNote from "../../assets/musicNote.svg"

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <section id="info-web">
          <div id="info-text">
            <div>
              <h1>Escute já</h1>
              <div>
                Aqui você pode compartilhar músicas criadas por você e ganhar
                seguidores, podendo ficar famoso por aqui.
              </div>
              <div className="start-adventure-link">
                <Link to="/auth/register">Iniciar jornada musical</Link>
              </div>
            </div>
          </div>
          <div id="info-image">
            <div>
              <img width={300} height={300} src={musicNote} alt="" />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Home
