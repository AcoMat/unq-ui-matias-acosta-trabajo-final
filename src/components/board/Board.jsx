import Card from '../card/Card';
import './Board.css';
import placeholder from '../../assets/cards/1oro.jpg'

function Board({ height, width }) {
    return (
        <div className="board four-columns">
            {
                Array.from({ length:(height * width) }, (_, index) => (
                    <Card key={index} image={placeholder}/>
                  ))
            }
        </div>
    );
}

export default Board;