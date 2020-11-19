/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100

export const getPostsById = id => fetch(`https://jsonplaceholder.typicode.com/Posts/${id}`);

export const getPostsBulk = () => fetch("https://jsonplaceholder.typicode.com/posts");

export const getPlanets = () => fetch("https://swapi.dev/api/people");
export const getMorePlanets = url => fetch(url);

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
}

