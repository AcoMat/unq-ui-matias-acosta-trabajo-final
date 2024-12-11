import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
import { useContext, useState } from 'react';
import { cardImages } from '../../util/images-import';
import { CardSelectionContext } from '../../context/CardSelectionContext';


function Card({ value }) {
    const [active, setActive] = useState(false);
    const [locked, setLocked] = useState(false);
    const { allLocked, addSelection } = useContext(CardSelectionContext)

    const handleClick = () => {
        if (locked || active || allLocked) return;
        setActive(!active);
        addSelection({ value, setActive, setLocked });
    };

    return (
        <div className={`flip-card ${active ? '' : 'inactive'} ${allLocked ? '' : "clickable" }`} onClick={handleClick}>
            <div className='flip-card-front'>
                <img src={cardImages[value]} alt="card" className='card-image-front' />
            </div>
            <div className='flip-card-back'>
                <img src={reverso} alt="card" className='card-image-back' />
            </div>
        </div>
    );
}

export default Card;