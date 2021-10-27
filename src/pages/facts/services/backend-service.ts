import axios from 'axios';
import { Joke } from '../../../entities/joke';

export function getCategories(): Promise<string[]> {
  return axios
    .get<string []>('https://api.chucknorris.io/jokes/categories')
    .then(res => res.data);
}

export function getJoke(categorie?: string): Promise<Joke> {
  return categorie ? getJokeFromCategorie(categorie) : getRandomJoke();
}

function getRandomJoke(): Promise<Joke> {
  return axios
    .get<Joke>('https://api.chucknorris.io/jokes/random')
    .then(res => res.data);
}

function getJokeFromCategorie(category: string): Promise<Joke> {
  return axios
    .get<Joke>('https://api.chucknorris.io/jokes/random', { params: { category } })
    .then(res => res.data);
}
