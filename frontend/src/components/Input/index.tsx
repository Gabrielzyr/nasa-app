import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core'
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ 
  name, 
  icon: Icon, 
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input
        name={name}
        ref={inputRef}
        type="text"
        placeholder=""
        {...rest}
      />
      {Icon && <Icon size={20} />}
    </Container>
  )
}

export default Input