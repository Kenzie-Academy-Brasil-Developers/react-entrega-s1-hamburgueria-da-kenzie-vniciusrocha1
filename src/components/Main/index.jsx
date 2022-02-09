import                 './style.css';
import  Vitrine   from '../Vitrine';
import  Carrinho  from '../Carrinho';
import {useState} from 'react';
const Main = ({filtro,vitrine,setVitrine}) => {
    const [carrinho, setCarrinho] = useState([]);
    const addCarrinho = (idAdd) => {
        let validate = carrinho.filter(item => item.id === idAdd);
        if (validate.length === 0) setCarrinho([...carrinho, ...vitrine.filter(({id}) => id===idAdd)]);
    };
    return (
        <main className="all--main">
            <section className="main--vitrine">
                {(filtro !== "Todos")? (
                    <div className="vitrine--result">
                        <span className="result--label">Resultados para: </span>
                        <span className="result--value">{filtro}</span>
                    </div>
                ):(<div></div>)}
                <div className="vitrine--list">
                    <Vitrine vitrine={vitrine} setVitrine={setVitrine} filtro={filtro} addCarrinho={addCarrinho}/>
                </div>
            </section>
            <section className="main--carrinho">
                <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
            </section>
        </main>
    )
}
export default Main;