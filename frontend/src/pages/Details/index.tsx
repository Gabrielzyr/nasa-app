import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { nasaApi } from '../../services/api';
import { GiAtomicSlashes } from 'react-icons/gi';
import { FiChevronLeft } from 'react-icons/fi';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Header, Content, ButtonsContainer } from './styles';

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
  const [isFavorited, setIsFavorited] = useState(false);
  
  const [favorites, setFavorites] = useState<INasaImage[]>(() => {
    const getFavorites = localStorage.getItem('@NasaApp:favorites')

    if (getFavorites) {
      return JSON.parse(getFavorites);
    }
    return [];
  });


  useEffect(() => {
    nasaApi.get(``, {
      params: {
        date: params.date,
      }
    }).then(response => {
      setImage(response.data)
    })
    
  }, [params.date]);

  useEffect(() => {
    const getFavorites = localStorage.getItem('@NasaApp:favorites')

    if (getFavorites) {
    
      if (getFavorites) {
        let checkFavorited = JSON.parse(getFavorites).filter((fav: INasaImage) => {
          return fav.date === image?.date
        })

        if (checkFavorited.length > 0) {
          setIsFavorited(true)
        } else {
          setIsFavorited(false)
        }
      }

      return setFavorites(JSON.parse(getFavorites))
    }
    return setFavorites([]);
  }, [image?.date, isFavorited, image])

  const handleAddToFavorites = async () => {
    if (image) {
      setFavorites([...favorites, image])
      setIsFavorited(true)

      localStorage.setItem(
       '@NasaApp:favorites',
        JSON.stringify([...favorites, image]),
      );
      return;
    }
    return;

  }

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
          Back
        </Link>
      </Header>
      {image?.copyright && <h1>Author: {image.copyright}</h1>}
      <Content>
        {image && (
          <div>
            <div className="image-container">
              <img src={image.url} alt={image.title}/>
              
              <ButtonsContainer>
                <a href={image.hdurl || image.url} target='__blank'>
                  Full image
                </a>
                <button type='button' onClick={handleAddToFavorites}>
                  {isFavorited ? (
                      <MdFavorite size={30} />

                  ) : <MdFavoriteBorder size={30} />
                  }
                  
                </button>
              </ButtonsContainer>
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