import React, { useRef } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import { FormHandles } from '@unform/core';

interface IFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null)

  const handleFormSubmit = (data: IFormData) => {
    console.log(data)
  }

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input name="email" type="email" placeholder="Choose a username" />      
      <Input name="password" type="text" placeholder="Choose a username" />

      <button type="submit">Save</button>
    </Form>
  )
}

export default SignIn;