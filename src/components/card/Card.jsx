import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
import { useState } from 'react';
import { cardImages } from '../../util/images-import';


function Card({ value, addSelection }) {
    const [active, setActive] = useState(false);
    const [locked, setLocked] = useState(false);

    const handleClick = () => {
        if (locked || active) return;
        setActive(!active);
        addSelection({ value, setActive, setLocked });
    };

    return (
        <div className={`flip-card ${active ? '' : 'inactive'}`} onClick={handleClick}>
            <div className='flip-card-front'>
                <img src={cardImages[value]} alt="card" className='card-image' />
            </div>
            <div className='flip-card-back'>
                <img src={reverso} alt="card" className='card-image' />
            </div>
        </div>
    );
}

export default Card;