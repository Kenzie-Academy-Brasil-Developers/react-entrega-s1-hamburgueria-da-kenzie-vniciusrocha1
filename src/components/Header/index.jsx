import './style.css';
import Logo from '../../img/logo.svg';
import { useEffect, useState } from 'react';
const Header = ({setFiltro}) => {
    const [valueSearch, setValueSearch] = useState("");
    useEffect(() => setFiltro((valueSearch !== "")? valueSearch : "Todos"),[valueSearch]);
    return (
        <header className="header--all">
            <img className="all--logo" src={Logo} alt="Burger Kenzie"></img>
            <div className="all--search">
                <input className="search--input" placeholder="Sanduíche" value={valueSearch} onChange={(e)=>setValueSearch(e.target.value)}></input>
                <button className="Button Green" onClick={() => setFiltro((valueSearch !== "")? valueSearch : "Todos")}>Pesquisar</button>
            </div>
        </header>
    );
}
export default Header;