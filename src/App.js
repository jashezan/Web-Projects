import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <div className='page'>
      <Header/>
      <h1 className='App'>Counter App</h1>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
