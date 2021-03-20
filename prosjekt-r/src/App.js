import './App.css';
import Events from'./Components/Event'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Utskriving av data</h1>
        <h2>Filmer:</h2>
        <Events />
      </header>
    </div>
  );
}

export default App;
