import styled from "styled-components"

const Container = styled.div`
  position: relative;
  height: 100vh;

  & > div {
    position: absolute;
    background: blue;
    width: 400px;
    height: 400px;
    margin: auto;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 5px black;
  }

  & > div > form {
    background: ${props => props.theme.colors.secondary};
    height: 100%;
  }
`
export { Container }
