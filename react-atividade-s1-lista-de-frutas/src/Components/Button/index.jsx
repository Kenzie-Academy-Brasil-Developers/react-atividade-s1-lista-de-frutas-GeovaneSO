import './style.css';
function Button({callBack}){
    return (
        <button onClick={callBack}>Filtrar</button>
    )
}
export default Button;