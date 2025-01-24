import fetch from "node-fetch";

import { TextDecoder, TextEncoder } from 'util';

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

const ApiAllMovies = 'https://plankton-app-xhkom.ondigitalocean.app/api/movies';
const ApiSingleMovie = 'https://plankton-app-xhkom.ondigitalocean.app/api/movies';

export async function loadMovies() {

    const res = await fetch(ApiAllMovies);
    const payload = await res.json();
    return payload.data;
}

export async function loadMovie(id) {
    const res = await fetch(`${ApiSingleMovie}/${id}`);
    const payload = await res.json();
    return payload.data;
}
