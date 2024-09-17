import Card from '../card/card';
import './cards.css';

function 

Cards({dogs}) {
    return (
        <div className="cards-container bounce">
            {dogs?.map(dog => <Card dog = {dog}/>)}
        </div>
    );
}

export default Cards;