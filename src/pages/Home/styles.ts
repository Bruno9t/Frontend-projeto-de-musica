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

  div.start-adventure-link a {
    display: inline-block;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    margin-top: 70px;
    background-color: ${props => props.theme.colors.primary};
    padding: 20px;
    border-radius: 3px;
    transition: 320ms;
  }

  div.start-adventure-link a:hover {
    background: ${props => props.theme.colors['background-hover']};
    color: ${props => props.theme.colors.primary};
    box-shadow: 2px 2px 5px black;
  }

  div#info-text h1 {
    margin-bottom: 20px;
  }

  div#info-text > div {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 3px;
    padding: 15px;
    text-align: center;
    color: ${props => props.theme.colors.text};
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
