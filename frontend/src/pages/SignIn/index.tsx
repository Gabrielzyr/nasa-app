import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as yup from 'yup';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';

interface IFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleFormSubmit = useCallback( 
    async (data: IFormData) => {
      try {
        const schema = yup.object().shape({
          email: yup.string().email().required('Email obrigatório'),
          password: yup.string().required('Senha obrigatória')
        });
        console.log("cheguei aqui",data)
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password
        });

        console.log('funcionou')
        
      } catch (err) {
        alert('Ocorreu um erro durante o login, tente novamente.')
        console.log(err)
        
      }
    },
    [signIn],
  );

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input name="email" type="email" placeholder="Choose a username" />      
      <Input name="password" type="text" placeholder="Choose a username" />

      <button type="submit">Entrar</button>
    </Form>
  )
}

export default SignIn;