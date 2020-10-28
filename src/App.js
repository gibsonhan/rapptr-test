import './App.css';
import Landing from './screen/Landing';
import Main from './screen/Main';

const screen = {
  'landing' : <Landing />,
  'main': <Main />
}

function App() {
  return (
    screen['landing']
  );
}

export default App;
