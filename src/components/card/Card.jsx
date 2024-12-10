import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
import { useState } from 'react';
function Card({ image }) {
    const [active, setActive] = useState(false);
    return (
        <div className={`flip-card ${active ? '' : 'inactive'}`} onClick={() => setActive(!active)}>
            <div className='flip-card-front'>
                <img src={image} alt="card" className='card-image' />
            </div>
            <div className='flip-card-back'>
                <img src={reverso} alt="card" className='card-image' />
            </div>
        </div>
    );
}

export default Card;