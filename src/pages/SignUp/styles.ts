import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  height: 100vh;

  div#image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div#image img {
    position: absolute;
    background: ${props => props.theme.colors.secondary};
    padding: 30px;
    width: 100%;
    height: 100%;
  }

  div#form {
    position: relative;
  }

  div#form > div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
  }

  div#form > div h1 {
    color: ${props => props.theme.colors.text};
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    padding: 20px;
  }

  & > div > form {
    background: ${props => props.theme.colors.secondary};
    width: 400px;
    height: auto;
    margin: 0 auto;
    padding: 10px;
  }

  div#group-name {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export { Container }
