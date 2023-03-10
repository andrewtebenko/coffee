import { Component } from 'react';

import './card-list-item.scss';

class CardListItem extends Component {
    render() {

        const {src, name, country, price, onOpenProducts} = this.props;

        return (
            <div className="card" onClick={onOpenProducts}>
                <img src={src} alt="coffee" className="card-img" />
                <p className="card-name">{name}</p>
                <p className="card-country">{country}</p>
                <p className="card-price">{price}</p>
            </div>
        )
    }
}

export default CardListItem;