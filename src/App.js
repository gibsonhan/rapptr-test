import './App.css';
import Landing from './screens/Landing';
import Main from './screens/Main';

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
