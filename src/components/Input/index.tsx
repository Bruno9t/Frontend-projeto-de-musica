import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from "react"

import { IconBaseProps } from "react-icons"

import { Container, InputElement } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  labelName: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  labelName,
  ...props
}) => {
  const inputElement = useRef<HTMLInputElement>(null)
  const [isInputFilled, setInputFill] = useState(false)
  const sizeOfImage = useState(30)

  const handleInputBlur = () => {
    setInputFill(Boolean(inputElement.current?.value.trim()))
  }

  return (
    <Container isFilled={isInputFilled} size={sizeOfImage[0]}>
      {Icon && <Icon size={sizeOfImage[0]} />}
      <InputElement
        size={sizeOfImage[0]}
        onBlur={handleInputBlur}
        isFilled={isInputFilled}
        hasIcon={!!Icon}
        ref={inputElement}
        {...props}
      />
      <label>{labelName}</label>
      <span />
    </Container>
  )
}

export default Input
