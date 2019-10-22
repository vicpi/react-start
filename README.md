# React Start

React Start is a convenient starting point for creating React applications.

## Features

React Start includes the following:

- React - A JavaScript library for building user interfaces. You can find more information about React if you go to their official website [https://reactjs.org](https://reactjs.org).
- Redux - A predictable state container for JavaScript apps. You can find more information about Redux if you go to their official website [https://redux.js.org](https://redux.js.org).
- React Router - A routing library for React. You can find more information about React Router if you go to their official website [https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start).
- Server-side rendering (SSR) - This is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client.
- Hot Module Replacement - This is a special technique that updates the code on the client without reloading the page. React Hot Loader is used under the hood ([https://github.com/gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader)).
- Jest - A delightful JavaScript Testing Framework with a focus on simplicity. You can find more information about Jest if you go to their official website [https://jestjs.io](https://jestjs.io)

## Install

```sh
git clone git@github.com:vicpi/react-start.git
cd react-start
npm install
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your favourite browser.

## NPM scripts

- ```npm start``` - Runs the application in development mode with Server Side Rendering and Hot Module Reloading.
- ```npm run dev``` - Runs the application in development mode with Hot Module Reloading on the client side and auto-update on the server side.
- ```npm run dev-ssr``` - Runs the application in development mode with Server Side Rendering and Hot Module Reloading. The same as ```npm start```.
- ```npm run production``` - Creates the minified production build and runs the application in production mode with Server Side Rendering.
- ```npm run build``` - Creates the minified production build in ```dist``` folder.
- ```npm test``` - Runs tests using Jest.

## License

React Start is open source software [licensed as MIT](https://github.com/vicpi/react-start/blob/master/LICENSE).