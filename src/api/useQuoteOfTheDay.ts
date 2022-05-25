import {useQuery} from 'react-query';
import {client} from './client';

const getQod = async () => {
  const response = await client.get('https://api.quotable.io/random');
  return response.data;
};

export const useQuoteOfTheDay = () =>
  useQuery(['qod', new Date().getUTCDay()], getQod);
