import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
});

const search = (query) => (
  unsplash.search.photos('cats')
  .then((response) => response.json())
);


export default {
  search,
};
