import { shade } from 'polished';
import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;

    h1 {
    font-size: 1.5rem;
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

export const Content = styled.main`
  margin-top: 15px;

  div {
    display: flex;
     
     div.image-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        min-width: 500px;
        max-width: 560px;
        margin-right: 12px;
        border-radius: 6px;
        
        img {
          min-height: 100%;
        }
      }
    
    div {
      display: flex;
      flex-direction: column;
      
     
      a {

      
      }
    }

    aside {
      max-width: 400px;

      p {
        overflow-wrap: break-word;
        font-size: 1rem;
        color: #f5f5f5;
        flex: 1;
      }  
    }
  
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 8px;
  
  a {
    text-decoration: none;
    margin-right: 10px;
    color: #f5f5f5;
    transition: color 200ms;

    &:hover {
      color: ${shade(0.2, '#f5f5f5' )};
    }

  }
  
  button {
    color: #f5f5f5;
    border: 0;
    background: transparent;
    display: flex;
    justify-content: center;

    svg {
      transition: color 200ms;
      &:hover {
        color: ${shade(0.2, '#f5f5f5')};
      }

    }
  }

`;