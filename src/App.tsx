import './App.css';
import { signal } from "@preact/signals-react";

const count = signal(0);

const App = () => {
  return (
    <div className="content">
      <h1>React Signals</h1>
        <p>count is <strong>{count.value}</strong></p>

        <button onClick={() => count.value++}>Increment</button>
    </div>
  );
};

export default App;
