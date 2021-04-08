import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 280px;
  border-bottom: 2px solid #f4ede8;
  display: flex;
  align-items: center;
  color: #f4ede8;


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    
    ::placeholder {
      color: #f0f0f0;
      opacity: 0.5;
    }
    :active {
      border: none;
    }
    :outline {
      border: none;
    }
  }
`;