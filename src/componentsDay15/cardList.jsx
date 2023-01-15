
import Card from "./card"
// import image from '../componentsDay14/Self.jpg'
import './cardList.css'
import cards from "./data"

const CardList = () => {
  
  return (
    <>
    <div className="set">
      <div className="row">
        {cards.map((card)=>{
          return <Card id={card.id} image={card.image} title={card.title} desc={card.description} />
        })}
      </div>
    </div>
    </>
  )
}

export default CardList