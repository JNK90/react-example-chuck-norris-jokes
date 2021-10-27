import './App.css';
import { Joke } from './entities/joke';
import { JokeViewComponent } from './pages/facts/joke-container';

function App() {
  return (
    <JokeViewComponent onAddToFavorites={(joke: Joke) => {console.log(joke)}}></JokeViewComponent>
  );
}

export default App;
