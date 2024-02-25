
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <>
      
      <Navbar />
      <Counter />
      <ItemListContainer greeting={'Welcome'} />
    </>
  );
}

export default App;
