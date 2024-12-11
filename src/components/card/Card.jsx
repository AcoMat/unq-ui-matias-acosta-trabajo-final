import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
import { useEffect, useState } from 'react';


function Card({ value, addSelection }) {
    const [active, setActive] = useState(false);
    const [locked, setLocked] = useState(false);

    const handleClick = () => {
        if (locked || active) return;
        setActive(!active);
        addSelection({ value, setActive, setLocked });
    };

    useEffect(() => {
        console.log("Carta creada");
        console.log(value);
        console.log(`../../assets/cards/${value}.jpg`);
        
    }, []);

    return (
        <div className={`flip-card ${active ? '' : 'inactive'}`} onClick={handleClick}>
            <div className='flip-card-front'>
                <img src={`../../assets/cards/11oro.jpg`} alt="card" className='card-image' />
            </div>
            <div className='flip-card-back'>
                <img src={reverso} alt="card" className='card-image' />
            </div>
        </div>
    );
}

export default Card;