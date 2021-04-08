import React from 'react';
import { nasaApi } from '../../services/api';

export const Searcher: React.FC = () => {
  const handleImageSearch = async () => {
    const response = await nasaApi.get('');

    console.log(response)
  }
  return (
    <div>
      <h2>Procure uma imagem</h2>
      <button type='button' onClick={() => handleImageSearch()}>Procurar</button>

    </div>
  )
}