import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APPLICATION_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
});

const searchUser = (query) => (
  unsplash.search.users(query)
    .then((response) => response.json())
);

const getUserPhotos = (username) => (
  unsplash.users.photos(username)
    .then((response) => response.json())
)

export default {
  searchUser,
  getUserPhotos,
};
