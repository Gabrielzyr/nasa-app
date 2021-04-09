import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';
import { GiAtomicSlashes } from 'react-icons/gi';

import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

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
        const schema = Yup.object().shape({
          email: Yup.string().email().required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória')
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password
        });

      } catch (err) {
        alert('Ocorreu um erro durante o login, tente novamente.')
        console.log(err)
        
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <GiAtomicSlashes size={100} color='white'/>
        <h1>Hi! Sign In and start exploring through NASA's daily pictures</h1>

        <label>Login</label>
        <Input 
          name="email" 
          type="email" 
          icon={IoMailOutline}
          placeholder="user@email.com" 
        />

        <label>Password</label>
        <Input 
          name="password" 
          type="password"
          icon={IoLockClosedOutline}
        />

        <Button type="submit">Sign In</Button>
          <span>Doesn't have an account?
            <Link to='signUp'>Sign Up</Link>
          </span>
      </Form>
    </Container>
  )
}

export default SignIn;