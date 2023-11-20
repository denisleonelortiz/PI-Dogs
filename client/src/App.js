import './App.css';
import Create from './views/create/create';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import Landing from './views/landing/landing'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/:id' element={<Detail/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
        </div>
    );
}

export default App;
