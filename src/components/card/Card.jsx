import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
function Card({ image }) {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={image} alt="card" className='card-image' />
                </div>
                <div className='card-back'>
                    <img src={reverso} alt="card" className='card-image' />
                </div>
            </div>
        </div>
    );
}

export default Card;