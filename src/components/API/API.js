const MY_KEY = '23120149-b9b49e6d85d17734323f46136';
const BASE_URL = 'https://pixabay.com/api/';

export default function FetchAPI(searchInput, page = 1) {
  return fetch(
    `${BASE_URL}?q=${searchInput}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.json());
}
