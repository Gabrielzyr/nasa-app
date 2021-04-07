import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as yup from 'yup';

import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { api } from '../../services/api';
import { useHistory } from 'react-router';

interface IFormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory();

  const handleFormSubmit = useCallback( 
    async (data: IFormData) => {
      try {
        const schema = yup.object().shape({
          email: yup.string().email('Email obrigatório').required('Email obrigatório'),
          password: yup.string().required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        
        history.push('/dashboard')

      } catch (err) {
        alert('Ocorreu um erro durante o cadastro, tente novamente.')
        console.log(err)
      }
  }, [history])

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <Input name="email" type="email" placeholder="user@email.com" />
      <Input name="password" type="text" />

      <button type="submit">Cadastrar</button>
    </Form>
  )
}

export default SignUp;