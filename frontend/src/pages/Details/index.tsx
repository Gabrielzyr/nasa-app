import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { nasaApi } from '../../services/api';

interface INasaParams {
  date: string;
}

interface INasaImage {
  date: string;
  title: string;
  url: string;
  hdurl?: string;
  explanation: string;
  copyright?: string;
}


export const Details: React.FC = () => {
  const { params } = useRouteMatch<INasaParams>();
  const [image, setImage] = useState<INasaImage>();


  useEffect(() => {
    nasaApi.get(``, {
      params: {
        date: params.date,
      }
    }).then(response => {
      setImage(response.data)
    })
    
  }, [params.date]);

  console.log(params.date)
  return (
    <div>
      {image && (
        <div>
          <h2>{image.title}</h2>
          {image.copyright && <h1>Autor: {image.copyright}</h1>}
          <img src={image.url} alt={image.title}/>
          <p>{image.explanation}</p>
        </div>
      )}
    </div>
  )
}