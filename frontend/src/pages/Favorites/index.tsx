import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { GiAtomicSlashes } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { reverDate } from '../../lib/utils';
import { Container, Header, FavoritesContainer, FavoriteCard } from './styles';

interface INasaData {
  date: string;
  title: string;
  url: string;
  hdurl?: string;
  explanation: string;
  copyright?: string;
}

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<INasaData[]>(() => {
    const getFavorites = localStorage.getItem('@NasaApp:favorites')
    if (getFavorites) {
      return JSON.parse(getFavorites)
    }
    return [];
  });

  return (
    <Container>
      <Header>
        <div>
          <GiAtomicSlashes size={34} color='white' />
        
          <h2> - Favorites</h2>
        
        </div>
        <Link to="/searcher">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      <h1>Find what you liked</h1>

      <FavoritesContainer>
        {favorites && favorites.map(favorite => (
          <FavoriteCard>
            <Link to={`/details/${favorite.date}`} >
              <div>
                <img src={favorite.url} alt={favorite.title}/>
              </div>
              <div>
                {favorite.copyright && <h1>Author: {favorite.copyright}</h1>}
                <h1>{favorite.title}</h1>
                <p>{reverDate(favorite.date)}</p>
              </div>
            </Link>
          </FavoriteCard>
        ))}
      </FavoritesContainer>

      
    </Container>
  )
}