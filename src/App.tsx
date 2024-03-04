import { useState } from 'react';
import './App.scss';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            {count}i love myself
        </div>
    );
}

export default App;
