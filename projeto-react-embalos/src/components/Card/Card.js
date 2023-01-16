import { CardContainer } from "./styles";

function Card (props) {
    // console.log(props)
    const {img, name, tipo, card} = props
    return (
        <CardContainer>
            <img src={img} alt={name}/>
        <h1>{card}</h1>
        <h2>{name}</h2>
        <p> {tipo}</p>
        <button>-</button>
        <button>$ 0,00</button>
        <button>+</button>
        </CardContainer>
    )
}

export default Card;