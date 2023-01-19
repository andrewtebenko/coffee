import { Component } from 'react';

import './card-filter.scss';

class CardFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchStr: ''
        }
    }

    onUpdateSearchProduct = (e) => {
        const searchStr = e.target.value.toLowerCase();
        this.setState({searchStr: searchStr});
        this.props.onUpdateSearchProduct(searchStr);
    }

    render() {

        const buttonsData = [
            {name: 'Brazil', label: 'Brazil'},
            {name: 'Kenya', label: 'Kenya'},
            {name: 'Columbia', label: 'Columbia'}
        ];

        const buttons = buttonsData.map(({name, label}) => {
            const activeClazz = this.props.filterProduct === name;
            const clazz = activeClazz ? "activeClazz" : ""; 
            return (
                <button 
                    type="button" 
                    className={`btn btn-light filter-btn ${clazz}`}
                    key={name}
                    onClick={() => this.props.onUpdateFilter(name)}>
                    {label}
                </button>
            )
        })

        return(
            <div className="card-filter">
                <div className="container">
                    <div className="row">
                        <div className="offset-2 col-8 offset-2 card-filter_wrapper">
                            <div className="search-wrapper">
                                <label htmlFor="search-input">Looking for</label>
                                <input type="text" className="search-input" id="search-input" value={this.state.searchStr} 
                                placeholder="start typing here..." onChange={this.onUpdateSearchProduct}/>
                            </div>
                            <div className="filter">
                                <label htmlFor="filter-block">Or filter</label>
                                <div className="filter-block">
                                    {buttons}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFilter;