import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => <Card key={i} Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
    return (
        <div>
           {cardComponent}
        </div>
    );
}

export default CardList;