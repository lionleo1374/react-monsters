import React from 'react';
import 'components/card-list/card-list.css'
import {Card} from 'components/card/card'

export const CardList = (props) => {
    const { monsters } = props;
    return <div className="card-list">
        {monsters.map((monster, key) => <Card key={key} monster={monster}/>)}
    </div>
}