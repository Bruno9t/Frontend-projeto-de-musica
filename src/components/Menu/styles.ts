import styled from 'styled-components'

interface OptionProps {
  keyP: number
}

const Container = styled.header`
  position: absolute;
  background-color: #34495e;
  height: ${defaults().diameter}px;
  width: ${defaults().diameter}px;
  border-radius: 50%;
  top: ${-defaults().radius}px;
  left: ${-defaults().radius}px;
  transition: 400ms;
  box-shadow: 2px 2px 5px black;
  z-index: 1;

  &:hover {
    transform: scale(2);
  }
`

const MenuOptions = styled.div`
  width: auto;
  height: auto;
`

const Option = styled.div<OptionProps>`
  font-size: 20px;
  position: absolute;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: #2c3e50;
  height: ${defaults().boxOptionSize}px;
  width: ${defaults().boxOptionSize}px;
  left: ${props =>
    (
      defaults().centerX +
      160 * Math.cos(props.keyP * (Math.PI / (2 * (6 + 1))))
    ).toFixed(3)}px;
  top: ${props =>
    (
      defaults().centerY +
      160 * Math.sin(props.keyP * (Math.PI / (2 * (6 + 1))))
    ).toFixed(3)}px;
  border-radius: 50%;
  transition: 300ms;
  border: none;

  &:hover {
    box-shadow: 2px 2px 5px black;
    color: #2c3e50;
    background-color: white;
  }

  svg {
    text-align: center;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%, -50%);
  }
`

const ToggleTheme = styled(Option)`
  font-size: 35px;
  left: ${defaults().centerX}px;
  top: ${defaults().centerY}px;
  height: ${defaults().boxOptionSize * 3}px;
  width: ${defaults().boxOptionSize * 3}px;
  z-index: 2;
`

const LineBreak = styled.div`
  position: absolute;
  left: ${defaults().centerX - defaults().boxOptionSize * 4.75}px;
  top: ${defaults().centerY - defaults().boxOptionSize * 4.75}px;
  height: ${defaults().boxOptionSize * 9.5}px;
  width: ${defaults().boxOptionSize * 9.5}px;
  background: transparent;
  z-index: 0;
  border-radius: 50%;
  border: 1px #2c3e50 solid;
`

function defaults() {
  return {
    diameter: 400,
    boxOptionSize: 30,
    get radius() {
      return this.diameter / 2
    },
    get centerX() {
      return this.radius - this.boxOptionSize / 2
    },
    get centerY() {
      return this.radius - this.boxOptionSize / 2
    },
  }
}

export { Container, MenuOptions, Option, ToggleTheme, LineBreak }
