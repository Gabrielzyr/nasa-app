import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fff;
  height: 44px;
  border-radius: 30px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  max-width: 220px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#fff')};
  }
`;
