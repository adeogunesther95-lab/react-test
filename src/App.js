import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      <main>
        <Weather city={"London"} />
        <Weather city={"Tokyo"} />
        <Weather city={"Lagos"} />
      </main>
    </div>
  );
}

export default App;
