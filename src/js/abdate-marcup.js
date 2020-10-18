import { alert, notice, info, success, error } from '@pnotify/core';
import countriesTemplateItem from '../templates/templates-countries-item.hbs';
import countriesTemplateList from '../templates/templates-countries-list.hbs';
import ref from './refs.js';
function markupSelection(item) {
  if (!item) {
    ref.listCountriesRef.innerHTML = '';
    return;
  } else if (item.length > 10) {
    alert({
      title: 'Oh No!',
      text: 'Too many matches found.Please enter a more specific query',
    });
    ref.listCountriesRef.innerHTML = '';
  } else if (item.length >= 2 && item.length <= 10) {
    ref.listCountriesRef.innerHTML = countriesTemplateList(item);
  } else {
    ref.listCountriesRef.innerHTML = countriesTemplateItem(item);
  }
}
export default markupSelection;
