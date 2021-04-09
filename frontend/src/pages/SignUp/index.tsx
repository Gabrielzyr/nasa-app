import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import { api } from '../../services/api';
import { useHistory } from 'react-router';
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';
import { Container } from './styles';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { GiAtomicSlashes } from 'react-icons/gi';

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
        const schema = Yup.object().shape({
          email: Yup.string().email('Email obrigatório').required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        
        history.push('/signIn')

      } catch (err) {
        alert('Ocorreu um erro durante o cadastro, tente novamente.')
        console.log(err)
      }
  }, [history])

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <GiAtomicSlashes size={100} color='white'/>
        <h1>Hello newcomer! Sign Up now and to start exploring all the pictures</h1>

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

        <Button type="submit">Sign Up</Button>
          <span>Already a user?
            <Link to='signIn'>Sign In</Link>
          </span>
      </Form>
    </Container>
  )
}

export default SignUp;