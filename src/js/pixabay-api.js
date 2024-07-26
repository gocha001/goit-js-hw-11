export default function searchImagesByQuery(sear) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45094022-90f186f65f49c334b8043619f';
  const TYPE = 'photo';
  const ORIENT = 'horizontal';
  const SAFETY = 'true';

  return fetch(
    `${URL}?key=${API_KEY}&q=${sear}&image_type=${TYPE}&orientation=${ORIENT}&safesearch=${SAFETY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
