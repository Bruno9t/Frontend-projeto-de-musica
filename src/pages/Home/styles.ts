import styled from 'styled-components'

const Container = styled.main`
  margin-top: 20px;
  height: 300px;

  section#info-web {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }

  div#info-image > div {
    text-align: center;
    width: 300px;
    height: 100%;
  }

  section#info-web > div {
    margin: 20px;
  }

  div#info-text {
  }

  section#info-web > div > div {
    margin: auto;
    font-size: 20px;
  }

  div#info-text h1 {
    margin-bottom: 20px;
  }

  div#info-text > div {
    background-color: #34495e;
    border-radius: 3px;
    padding: 15px;
    text-align: center;
    color: white;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 865px) {
    section#info-web {
      grid-template-columns: 1fr;
    }
    div#info-image {
      display: none;
    }
  }
`

export { Container }
