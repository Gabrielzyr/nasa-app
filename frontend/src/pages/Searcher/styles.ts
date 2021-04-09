import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items: center;

  form {
    display: flex;
    width: 60%;
    align-items: center;
    flex-direction: column;
    margin: 20px 0 30px;
    
    h2 {
      color: whitesmoke;

    }

    p {
      color: whitesmoke;
      margin: 15px 0;
    }

    div {
      display: flex;
      background: rgba(141,73,231, .8);
      border-radius: 16px;
      height: 36px;
      width: 200px;
      align-items: center;
      justify-content: center;

      input {
        align-self: center;
        flex: 1;
        color: white;
        height: 100%;
        width: 60%;
        background: transparent;
        border: 0;
        margin-left: 10px;
        ::placeholder {
          color: white;
        }
      }

    }

    button {
      margin-top: 15px;
      width: 80%;
      max-width: 200px;
      border-radius: 14px;
      background: #800080;
      height: 36px;
      border: none;
      text-transform: uppercase;
      color: whitesmoke;
      transition: background-color 400ms;

      :hover {
        background-color: ${shade(0.2, '#800080')};
      }
    }
  }
`;
