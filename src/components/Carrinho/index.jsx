import CarrinhoMain from '../Carrinho-main';
import './style.css';
const Carrinho = ({carrinho,setCarrinho}) => {
    return (<>
        <div className="carrinho-header">Carrinho de compras</div>
        <CarrinhoMain carrinho={carrinho} setCarrinho={setCarrinho}/>
        {(carrinho.length > 0 )? (
            <div className="carrinho-footer">
                <div>
                    <span>Total:</span>
                    <span>{
                        carrinho.reduce((acc,{price}) => acc + Number(price),0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                    }</span>
                </div>
                <button className="Button Grey Flat" onClick={() => setCarrinho([])}>Limpar carrinho</button>
            </div>
        ):(<div></div>)}
    </>);
}
export default Carrinho;