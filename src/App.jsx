import './App.css';import Answer from './components/Answer/Answer';
;
import Cafe from './components/Cafe/Cafe';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
         <Navbar></Navbar>
         <Cafe></Cafe>
         <Answer></Answer>
    </div>
  )
}

export default App
