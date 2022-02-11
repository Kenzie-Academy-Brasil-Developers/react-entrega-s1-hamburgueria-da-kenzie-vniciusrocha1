import './style.css';
const Vitrine = ({vitrine,addCarrinho,filtro}) => {
    return vitrine.filter(({name,category})=> (filtro !== "Todos")? name.toLowerCase().includes(filtro.toLowerCase()) || category.toLowerCase().includes(filtro.toLowerCase()) : name !== "todos").map(({img,name,category,price,id},index) => (<>
        <div className="vitrine--card" key={`${index}-vitrine`}>
            <div className="card-img">
                <img src={img} alt=""></img>
            </div>
            <div className="card-data">
                <span   className="card-data--name">    {name}</span>
                <span   className="card-data--category">{category}</span>
                <span   className="card-data--price">   {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className="card-button">
                <button className="Button Green" onClick = {() => addCarrinho(id)}> Adicionar</button>
            </div>
        </div>
    </>));
}
export default Vitrine;