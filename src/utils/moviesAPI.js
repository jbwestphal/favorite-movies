import { tokenAPI, urlAPI } from '../firebase/firebase';

const headers = {
  Accept: 'application/json'
};

export const getMoviesPopular = () =>
  fetch(`${urlAPI}/popular?api_key=${tokenAPI}&language=en-US&page=1`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);

export const getMoviesUpcoming = () =>
  fetch(`${urlAPI}/upcoming?api_key=${tokenAPI}&language=en-US&page=1`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);
