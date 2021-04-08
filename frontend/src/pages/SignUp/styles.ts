import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: linear-gradient(20deg, rgba(2,0,36,1) 0%, rgba(65,9,121,1) 50%, rgba(162,0,255,1) 100%);
  align-items: center;
  justify-content: center;
  

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 800px;
    height: 80vh;
    border-radius: 18px;
    background: rgba(46,27,87,0.7);
    align-items: center;
    justify-content: center;
    
    svg:first-child {
      margin-bottom: 30px;
    }

    h1 {
      width: 80%;
      max-width: 280px;

      text-align: center;
      font-size: .9rem;
      color: white;

      margin-bottom: 20px;
    }


    label {
      width: 80%;
      max-width: 280px;
      color: white;
      opacity: 0.3;
      font-size: 0.8rem;
      text-align: left;
      
    }

    label:not(:first-child) {
      margin-top: 20px;
    }

    button {
      margin-top: 30px;
    }

    span {
      margin-top: 10px;
      color: #999591;
      font-size: .9rem;
 
      a {
        margin-left: 10px;
        /* font-size: 1rem; */
        text-decoration: none;
        color: white;
      }
    }
  }

`;