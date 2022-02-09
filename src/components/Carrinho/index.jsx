import './style.css';
const Carrinho = ({carrinho,setCarrinho}) => {
    const remCarrinho = (idToRem) => setCarrinho(carrinho.filter(({id}) => id !== idToRem));
    return (<>
        <div className="carrinho-header">Carrinho de compras</div>
            {(carrinho.length > 0 )? (
                <div className="carrinho-main">
                    {carrinho.map(({img,name,category,id,price},index) => (
                        <div className="carrinho-main--cards" key={`${index}-carrinho`}>
                            <img className="cards--cards-img" src={img} alt=""></img>
                            <div className="cards--cards-data">
                                <span className="cards-data--span-name">    {name}    </span>
                                <span className="cards-data--span-category">{category}</span>
                            </div>
                            <div className="cards--cards-button">
                                <span className="btn-remover" onClick={()=>remCarrinho(id)}>Remover</span>
                                <span className="span-value">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ): (
                <div className="carrinho-main--vazio">
                    <span className="span1">Sua sacola está vazia</span>
                    <span className="span2">Adicione itens</span>
                </div>
            )}
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