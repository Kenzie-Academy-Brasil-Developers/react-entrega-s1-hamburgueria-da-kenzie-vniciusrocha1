import './css/App.css';
import {useEffect, useState} from 'react';
import Header     from './components/Header';
import Main       from './components/Main';
const App = () => {
    const [vitrine,setVitrine] = useState([]);
    const [filtro,setFiltro]   = useState("Todos");
    useEffect(() => fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products').then(response => response.json()).then(result => setVitrine(result)),[]);
    return (
        <div className="App">
            <Header setFiltro={setFiltro}/>
            <Main   filtro={filtro} vitrine={vitrine} setVitrine={setVitrine}/>
        </div>
    );
}
export default App;