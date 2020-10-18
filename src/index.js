import './sass/styles.scss';
import '@pnotify/core/dist/BrightTheme.css';
import ref from './js/refs.js';
import markupSelection from './js/abdate-marcup.js';
import serviceAPI from './js/fetch-countries.js';
import debounce from 'lodash.debounce';
ref.inputRef.addEventListener(
  'input',
  debounce(event => {
    const nameCountry = ref.inputRef.value;
    serviceAPI.query = nameCountry.trim()
    serviceAPI.fetchCountries().then(markupSelection);
  }, 500),
);
