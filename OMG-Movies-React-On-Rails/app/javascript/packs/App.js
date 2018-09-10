import ReactOnRails from 'react-on-rails';
import 'babel-polyfill'
import App from '../bundles/App';
import MoviePage from '../bundles/Components/Genres/MoviePage';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App, MoviePage
});
