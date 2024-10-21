import React, { useState } from 'react';
import { FaStar, FaCamera } from "react-icons/fa6";

function Card_Carousel({ title = 'TITLE HERE', cardlist = [1, 2, 3, 4], star = true, bg = 'purple', cardHeight = 130, cardWidth = 150 }) {
    // Move state and function outside the map callback
    const [favList, setFavList] = useState(Array(cardlist.length).fill(false));

    const handleToggleFavorite = (idx) => {
        setFavList((prevFavList) => {
            const newFavList = [...prevFavList];
            newFavList[idx] = !newFavList[idx];
            return newFavList;
        });
    };

    return (
        <div className="Card_Carousel">
            <div className="heading my-3 fw-bold fs-5" style={{}}>{title}</div>
            <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5%' }}>
                {cardlist.map((ele, idx) => (
                    <div
                        key={idx}
                        className="card"
                        style={{
                            height: cardHeight,
                            width: cardWidth,
                            background: `var(--${bg == 'grey' ? 'grey-shade' : 'theme-color'})`,
                            borderRadius: '15%',
                            overflow: 'hidden',
                            padding: '17px 12px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                        }}
                        onClick={() => handleToggleFavorite(idx)}
                    >
                        <div className="top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {star ? <div className="icon" style={{ height: cardHeight / 4, width: cardHeight / 4, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: 'white' }}>
                                <FaCamera fontSize={'medium'} color='black' />
                            </div> :
                                <FaCamera fontSize={'larger'}/>
                            }
                            {
                                star ? (<FaStar fontSize={20} color={favList[idx] ? 'gold' : 'white'} />) : null
                            }

                        </div>
                        <div className="bottom">
                            <div id="title" style={{ fontSize: 15 }}>Anime Pictures</div>
                            <div id="count" style={{ fontSize: 12 }}>480 Shows</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card_Carousel;
