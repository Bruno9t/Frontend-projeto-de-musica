import styled, { css } from "styled-components"

interface ContainerProps {
  isFilled: boolean
  size: number
}

interface InputProps {
  isFilled: boolean
  hasIcon: boolean
  size: number
}

const Container = styled.div<ContainerProps>`
  position: relative;
  margin: 20px 10px;
  color: ${props => props.theme.colors.inputIcon};
  z-index: 0;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${props => (props.size + 20) / 4}px;
  }
`

const InputElement = styled.input<InputProps>`
  background: transparent;
  width: 100%;
  height: 45px;
  ${props =>
    props.hasIcon &&
    css`
      padding-left: ${props.size + 20}px;
    `}
  font-size: 20px;
  border: none;
  color: ${props => props.theme.colors.text};
  z-index: 2;

  ${props =>
    props.isFilled
      ? css`
          & ~ label {
            position: absolute;
            top: -10px;
            ${props.hasIcon
              ? css`
                  left: 40px;
                `
              : css`
                  left: 0;
                `}
            font-size: 12px;
            color: #4e8098;
          }
        `
      : css`
          & ~ label {
            z-index: -1;
            position: absolute;
            ${props.hasIcon
              ? css`
                  left: 50px;
                `
              : css`
                  left: 0;
                `}
            top: 50%;
            transform: translateY(-50%);
            color: gray;
            transition: 300ms;
          }

          &:focus ~ label {
            ${props.hasIcon
              ? css`
                  transform: translate(-10px, -33px);
                `
              : css`
                  transform: translateY(-33px);
                `}
            font-size: 12px;
            color: #4e8098;
          }
        `}

  & ~ span {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: 0.4s;
  }

  &:focus ~ span {
    width: 100%;
    height: 2px;
    background: #4e8098;
    transition: 400ms;
  }
`

export { Container, InputElement }
