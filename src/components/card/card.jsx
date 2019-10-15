import React from 'react';
import 'components/card/card.css'
import image from 'api/images/img-10.JPG'
export const Card = props => {
    const { monster } = props
    return <div className="card-container">
                <img alt="monsters" src={`https://picsum.photos/500/300?image=${monster.id * 5 + 10}`} style={{width:"100%"}} />
                <h2 >{monster.name}</h2>
                <p>{monster.email}</p>
           </div>
}
