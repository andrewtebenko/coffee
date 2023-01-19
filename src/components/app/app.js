import { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { goods } from "../../goods";

import Home from '../../pages/home/home';
import {Coffee} from '../../pages/coffee/coffee';
import {Pleasure} from '../../pages/pleasure/pleasure';

import '../../index.scss';
import '../../reset-bootstrap.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: goods,
            searchProduct: '',
            filterProduct: ''
        }
    }

    searchProductFunc = (searchStr, arrOfProducts) => {
        if (searchStr.length === 0) {
            return arrOfProducts;
        }
        return arrOfProducts.filter(item => {
            return item.name.toLowerCase().includes(searchStr);
        })
    }

    filterCountry = (arrOfProducts, filterProduct) => {
        switch(filterProduct) {
            case 'Brazil':
                return arrOfProducts.filter(item => item.country === 'Brazil')
            case 'Kenya':
                return arrOfProducts.filter(item => item.country === 'Kenya')
            case 'Columbia':
                return arrOfProducts.filter(item => item.country === 'Columbia')
            default:
                return arrOfProducts;
        }
    }

    onUpdateSearchProduct = (searchProduct) => {
        this.setState({searchProduct: searchProduct});
    }

    onUpdateFilter = (filterProduct) => {
        filterProduct === this.state.filterProduct ? this.setState({ filterProduct: '' }) : this.setState({ filterProduct });
    }

    render() {

        const {data, searchProduct, filterProduct} = this.state;
        const recommendedProducts = data.filter(item => item.recommended === true)
        const allCoffeeProducts = data.filter(item => item.recommended !== true)
        const filteredProducts = this.filterCountry(this.searchProductFunc(searchProduct, allCoffeeProducts), filterProduct)

        return (
            <div className="app">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home data={recommendedProducts} />}/>
                        <Route exact path="/coffee" element={<Coffee 
                               data={filteredProducts} 
                               onUpdateSearchProduct={this.onUpdateSearchProduct}
                               filterProduct={filterProduct}
                               onUpdateFilter={this.onUpdateFilter}/>} />
                        <Route exact path="/pleasure"element={<Pleasure data={data} />}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App;
