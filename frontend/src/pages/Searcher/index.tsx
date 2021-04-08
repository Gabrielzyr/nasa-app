import React, { FormEvent, useState } from 'react';
import { nasaApi } from '../../services/api';
import {format} from 'date-fns';
// import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {checkDateParam, MaskDateInput} from '../../lib/utils';
import { Link } from 'react-router-dom';
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

  const handleImageSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      let getParam = checkDateParam(newDate)
      const response = await nasaApi.get(``, {
        params: {
          date: getParam,
        }
      });

      console.log(response)
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
      console.log('oi')
      if (e.target.value.length > 7) {
        let numberFormat = Number(e.target.value)
        setApiParam(format(numberFormat, 'yyyy-mm-dd'))
        console.log(apiParam)
      }
    }

  }

  return (
    <div>
      <h2>Procure uma imagem</h2>
      <form onSubmit={handleImageSearch}>
        <input
          type='text'
          value={newDate}
          onChange={(e) => {
            handleChange(e);
            setNewDate(MaskDateInput(e.target.value))
          }}
          placeholder="YYYY-MM-DD"
        />
        <button type='submit'>Procurar</button>
      </form>
      {newImage && (
        <Link to={`/details/${newImage.date}`}>
          <h1>{newImage?.title}</h1>
          <img src={newImage?.url} alt={newImage?.title}/>
        </Link>

      )}
    </div>
  )


}