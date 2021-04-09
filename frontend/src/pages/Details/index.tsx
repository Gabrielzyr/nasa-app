import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { nasaApi } from '../../services/api';
import { Container, Header, Content } from './styles';
import { GiAtomicSlashes } from 'react-icons/gi';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


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
    <Container>
      <Header>
        <div>
          <GiAtomicSlashes size={34} color='white' />
          {image && (
            <h2> - {image.title}</h2>
          )}
        </div>
        <Link to="/searcher">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {image?.copyright && <h1>Author: {image.copyright}</h1>}
      <Content>
        {image && (
          <div>
            <div>
              <a href={image.hdurl || image.url} target='__blank'>
                <img src={image.url} alt={image.title}/>
              </a>
            </div>
            <aside>
              <p>{image.explanation}</p>
            </aside>
          </div>
        )}
      </Content>
    </Container>
  )
}