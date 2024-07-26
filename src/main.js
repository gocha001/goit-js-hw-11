import searchImagesByQuery from './js/pixabay-api.js';

import createImagesMarkup from './js/render-functions.js';
import { container } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

form.addEventListener('submit', handleSubmit);

let sear = null;

function handleSubmit(event) {
  event.preventDefault();

  const search = event.currentTarget.elements;
  sear = search.text.value.trim().toLowerCase();

  if (sear == 0) {
    iziToast.error({
      title: 'Error',
      message: 'The form field must be filled',
      position: 'topRight',
      transitionIn: 'bounceInDown',
    });
    return;
  }
  container.innerHTML = '';
  loader.style.display = 'block';

  searchImagesByQuery(sear)
    .then(data => {
      createImagesMarkup(data.hits);
      loader.style.display = 'none';
      if (data.hits.length == 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          transitionIn: 'bounceInDown',
        });
      }
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Oops... Something went wrong.',
        position: 'topRight',
        transitionIn: 'bounceInDown',
      });
      loader.style.display = 'none';
    })
    .finally(() => form.reset());
}
