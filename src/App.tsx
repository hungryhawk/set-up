import { useState } from 'react';
import './App.scss';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            {count}
            glathering
        </div>
    );
}

export default App;
