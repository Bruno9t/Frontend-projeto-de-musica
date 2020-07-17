import styled from 'styled-components'

interface OptionProps {
  keyP: number
}

const Container = styled.header`
  position: absolute;
  background-color: cyan;
  height: ${defaults().diameter}px;
  width: ${defaults().diameter}px;
  border-radius: 50%;
  top: ${-defaults().radius}px;
  left: ${-defaults().radius}px;
  transition: 400ms;

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
  cursor:pointer;
  color: white;
  font-weight: bold;
  background-color: chocolate;
  height: ${defaults().boxOptionSize}px;
  width: ${defaults().boxOptionSize}px;
  left: ${props =>(defaults().centerX + 160 * Math.cos(props.keyP * (Math.PI / (2*(6 + 1))))).toFixed(3)}px;
  top: ${props =>(defaults().centerY + 160 * Math.sin(props.keyP * (Math.PI / (2*(6 + 1))))).toFixed(3)}px;
  border-radius: 50%;
  transition: all 400ms;
  border:none;

  &:hover {
    box-shadow: 0px 0px 5px gray;
    color:chocolate;
    background-color:white;
  }

  figure {
    top: 50%;
    transform: translateY(-50%);
    left:50%;
    transform:translateX(50%)
  }
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
    }
  }
}

export { Container, MenuOptions, Option }
