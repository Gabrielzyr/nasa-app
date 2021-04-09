import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  max-width: 960px;
  margin: 0 auto;
  
  h1 {
    font-size: 1.6rem;
    margin: 15px 0;
    color: #f5f5f5;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    
    h2 {
      margin-left: 15px;
      color: whitesmoke;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f5f5f5')};


    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const FavoritesContainer = styled.div`
  div {

    &:not(:first-child) {
      margin-top: 15px;
    }
  }
`;

export const FavoriteCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  background: rgba(46,27,87,0.7);


  a {
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 100%;

    div > img {
      height: 200px;
      width: 200px;
      max-width: 200px;
    }

    div:not(:first-child) {
      margin-left: 20px;
      margin-top: 20px;

      h1 {
        color: #f5f5f5;
        font-size: 1.6rem;
        line-height: 1.3;
      }
      p {
        margin-top: 30px;
        color: #f5f5f5;
        font-size: 1rem;
      }
    }
  }


`;