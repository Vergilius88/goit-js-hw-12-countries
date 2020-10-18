export default {
  searchQuery: '',
  fetchCountries() {
    const urlAPI = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
    return fetch(urlAPI)
      .then(res => res.json())
      .then(data => data)
      .catch();
  },

  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
