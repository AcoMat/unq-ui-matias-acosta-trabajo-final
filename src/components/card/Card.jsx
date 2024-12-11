import './Card.css';
import reverso from '../../assets/cards/reverso.jpg';
import { useContext, useRef, useState } from 'react';
import { cardImages } from '../../util/images-import';
import { CardSelectionContext } from '../../context/CardSelectionContext';


function Card({ value }) {
    const [active, setActive] = useState(false);
    const [locked, setLocked] = useState(false);
    const { allLocked, addSelection } = useContext(CardSelectionContext);

    const cardflipmp3 = "https://cdn.discordapp.com/attachments/1025131615329988689/1316506673409429514/cardflip.mp3?ex=675b4be2&is=6759fa62&hm=38fcd3e92c54795086b886d40238a3c67c00810bbcf04cd87d5c6d9689bca546&";
    const flipAudio = useRef(null);

    const handleClick = () => {
        if (locked || active || allLocked) return;
        setActive(!active);
        flipAudio.current.play();
        addSelection({ value, setActive, setLocked });
    };

    return (
        <div className={`flip-card ${active ? '' : 'inactive'} ${allLocked ? '' : "clickable" }`} onClick={handleClick}>
            <audio ref={flipAudio} src={cardflipmp3} preload='auto' />
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