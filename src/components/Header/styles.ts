import styled from 'styled-components'

const Title = styled.h1`
  position: absolute;
  font-size: 50px;
  display: inline-block;
  color: ${props => props.theme.colors.text};
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;

  img:nth-child(1) {
    height: 70px;
    width: 70px;
    filter: ${props => props.theme.colors.filter};

    transform: rotateX(180deg);
  }
  img:nth-child(2) {
    transform: rotateY(180deg);
    height: 30px;
    filter: ${props => props.theme.colors.filter};
    width: 30px;
  }
  @media (max-width: 700px) {
    display: block;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  box-shadow: 0 0 10px black;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const LogoInfo = styled.div`
  position: relative;
  height: 150px;
  font-size: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;

  z-index: 0;
`

const LoginInfo = styled.div`
  margin: 10px auto;
  display: flex;
  div {
    width: 100px;
    height: 50px;
    margin: 10px;
    top: 50%;
    transform: translateY(50%);
    text-align: center;
  }

  div a {
    padding: 15px;
    display: inline-block;
    width: 100%;
    height: 100%;
    outline: none;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    border: 2px solid ${props => props.theme.colors['background-hover']};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 3px;
    transition: 300ms;
  }

  div a:hover {
    background: ${props => props.theme.colors['background-hover']};
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.secondary};
  }

  /* @media (max-width: 700px) {
    display: none;
  } */
`

export { Title, Container, LogoInfo, LoginInfo }
