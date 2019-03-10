
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Note:**
Added some TODO comments to show some ideas that could be implemented to improve UI.


## Folder structure

### index.js
Entry point for this app.

### store
Creates store and connects middlewares.

### actions
Contains actions creators for both userSearch and photos.

### reducers
Contains reducers for both userSearch and photos.

### constants
Contains constants with namespaces for both userSearch and photos.

### services
Contains unsplashService, which is the module in charge of handling unsplash requests.

### containers
Contains only stateful components. AppContainer is a HOC connecting App component to store.

### components
Contains only stateless components. Just App handles state.



## Available Scripts


In the project directory, you can run:



### `npm start`



Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



The page will reload if you make edits.<br>

You will also see any lint errors in the console.



### `npm test`



Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### `npm run build`



Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.



The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!



See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.