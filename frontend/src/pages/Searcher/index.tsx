import React, { FormEvent, useState } from 'react';
import { nasaApi } from '../../services/api';
import {format} from 'date-fns';

import {checkDateParam, MaskDateInput} from '../../lib/utils';
import { Container, Header } from './styles';
import { ImageContainer } from '../../components/ImageContainer';
import { GiAtomicSlashes } from 'react-icons/gi';
import { VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

interface INasaData {
  date: string;
  title: string;
  url: string;
  hdurl?: string;
  explanation: string;
  copyright?: string;
}

export const Searcher: React.FC = () => {
  const [apiParam, setApiParam] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newImage, setNewImage] = useState<INasaData>();

  const { signOut } = useAuth();


  const handleImageSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      let getParam = checkDateParam(newDate)
      const response = await nasaApi.get(``, {
        params: {
          date: getParam,
        }
      });

      if (!response) {
        throw new Error()
      };
      setNewImage(response.data)

    } catch (err) {
      alert('Cheque a data escolhida.')
      console.log(err)
    }
   
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = /^[0-9\b]+$/;

    if (e.target.value === '' || onlyNumbers.test(e.target.value)) {
      if (e.target.value.length > 7) {
        let numberFormat = Number(e.target.value)
        setApiParam(format(numberFormat, 'yyyy-mm-dd'))
      }
    }

  }

  return (
    <Container>
      <Header>
        <div>
          <GiAtomicSlashes size={30}/>

          <div>
            <Link to="searcher">Searcher</Link>
            <Link to='favorites'>
              Favorites
            </Link>
            <button 
              type="button"
              onClick={signOut}
            >
              Sign Out
              <VscSignOut size={22}/>
            </button>
          </div>
        </div>
      </Header>

      <form onSubmit={handleImageSearch}>
        <h2>Welcome to apod's explorer</h2>
        <p>Type a date between 16/06/1995 and today and see what you find</p>

        <div>
          <input
            type='text'
            value={newDate}
            onChange={(e) => {
              handleChange(e);
              setNewDate(MaskDateInput(e.target.value))
            }}
            placeholder="dd/mm/yyyy"
          />
        </div>

        <button type='submit'>Procurar</button>
      </form>

      {newImage && (
        <ImageContainer 
          date={newImage.date}
          title={newImage.title}
          url={newImage.url}
        />
      
      )}
    </Container>
  )


}