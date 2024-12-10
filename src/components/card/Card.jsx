import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
import { useContext, useState } from 'react';
import { CardSelectionContext } from '../../context/CardSelectionContext';
function Card({ image }) {
    const [active, setActive] = useState(false);
    const [locked, setLocked] = useState(false);
    const { addSelection } = useContext(CardSelectionContext);

    const handleClick = () => {
        if (locked) return;
        setActive(!active);
        addSelection({ id:"1oro", setActive, setLocked });
    };

    return (
        <div className={`flip-card ${active || locked ? '' : 'inactive'}`} onClick={handleClick}>
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