
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemsListContainer greeting={'Bienvenidos'}/>
        <ItemCount initial={1} stock= {10} onAdd={(quantity)=> console.log('Cantidad agregada' , quantity)}/>
    </div>
  );
}

export default App;
